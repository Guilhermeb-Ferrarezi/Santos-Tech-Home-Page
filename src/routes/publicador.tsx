import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState } from "react";
import JSZip from "jszip";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileArchive,
  Globe,
  Loader2,
  Trash2,
  Upload,
} from "lucide-react";

import { publishPublishedSite, deletePublishedSite, listPublishedSites } from "@/lib/site-publisher.functions";
import { normalizePublishedRoutePath } from "@/lib/site-path";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ArchivePreview = {
  title: string | null;
  html: string;
  assets: string[];
  warnings: string[];
  fileName: string;
};

export const Route = createFileRoute("/publicador")({
  loader: () => listPublishedSites(),
  component: PublisherPage,
  head: () => ({
    meta: [
      { title: "Publicador de Rotas — Santos Tech" },
      {
        name: "description",
        content:
          "Publique zips estáticos em rotas da Santos Tech com mini preview do index.html e gerenciamento de caminhos.",
      },
      { property: "og:title", content: "Publicador de Rotas — Santos Tech" },
      {
        property: "og:description",
        content: "Envie sites estáticos em ZIP e publique em rotas do domínio.",
      },
      { property: "og:url", content: "/publicador" },
    ],
    links: [{ rel: "canonical", href: "/publicador" }],
  }),
});

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

async function buildPreview(file: File): Promise<ArchivePreview> {
  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  const indexFile = zip.file(/(^|\/)index\.html$/i)[0];

  if (!indexFile) {
    throw new Error("O ZIP precisa conter um index.html.");
  }

  const html = await indexFile.async("string");
  const assets = Object.values(zip.files)
    .filter((entry) => !entry.dir && entry.name !== indexFile.name)
    .map((entry) => entry.name)
    .sort();

  const warnings = [];
  if (/<(img|script|link|source)[^>]+(src|href)=["']\/[^"']+["']/i.test(html)) {
    warnings.push("Esse index.html referencia caminhos absolutos. Eles podem conflitar com o app e com o Nginx.");
  }
  if (!/<title>[^<]+<\/title>/i.test(html)) {
    warnings.push("O HTML não tem <title>. O preview e a listagem ficam menos informativos.");
  }

  return {
    fileName: file.name,
    title: html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || null,
    html,
    assets,
    warnings,
  };
}

function PublisherPage() {
  const publishedSites = Route.useLoaderData();
  const router = useRouter();
  const publishFn = useServerFn(publishPublishedSite);
  const deleteFn = useServerFn(deletePublishedSite);

  const [routeInput, setRouteInput] = useState("/minha-rota");
  const [publisherSecret, setPublisherSecret] = useState("");
  const [archive, setArchive] = useState<File | null>(null);
  const [preview, setPreview] = useState<ArchivePreview | null>(null);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const routeCheck = useMemo(() => normalizePublishedRoutePath(routeInput), [routeInput]);

  useEffect(() => {
    const savedSecret = window.localStorage.getItem("santos-tech.publicador.secret");
    if (savedSecret) {
      setPublisherSecret(savedSecret);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!archive) {
        setPreview(null);
        setPreviewError(null);
        return;
      }

      setPreviewError(null);

      try {
        const data = await buildPreview(archive);
        if (!cancelled) {
          setPreview(data);
        }
      } catch (error) {
        if (!cancelled) {
          setPreview(null);
          setPreviewError(error instanceof Error ? error.message : "Não foi possível ler o ZIP.");
        }
      }
    }

    void run();

    return () => {
      cancelled = true;
    };
  }, [archive]);

  const canPublish = Boolean(routeCheck.path && archive && preview && !publishing);

  return (
    <div className="bg-gradient-to-b from-[#eef5fb] via-background to-white">
      <section className="relative isolate overflow-hidden border-b border-border bg-[#0b1d33] text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#187ABF]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-28 h-80 w-80 rounded-full bg-[#0DB88F]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <Badge className="bg-white/10 text-white hover:bg-white/10">Rotas estáticas</Badge>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Publicador de sites ZIP no domínio da Santos Tech
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
              Envie um ZIP com `index.html`, veja um mini preview antes de publicar e escolha a rota final na hora do envio. O Nginx serve o arquivo direto do volume local.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
              <span className="rounded-full border border-white/15 px-4 py-2">Volume local</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Nginx first</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Preview do index.html</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-xl">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="rotas">Rotas publicadas</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Card className="border-border/60 shadow-lg shadow-slate-900/5">
                <CardHeader>
                  <CardTitle>1. Defina a rota e envie o ZIP</CardTitle>
                  <CardDescription>
                    O slug vira a rota pública. Exemplo: `/curso-abc` ou `/landing-junho`.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="routePath">Rota pública</Label>
                    <Input
                      id="routePath"
                      value={routeInput}
                      onChange={(event) => setRouteInput(event.target.value)}
                      placeholder="/meu-site"
                    />
                    {routeCheck.error ? (
                      <p className="text-sm text-red-600">{routeCheck.error}</p>
                    ) : routeCheck.path ? (
                      <p className="text-sm text-emerald-700">
                        Publicará em <span className="font-semibold">{`santos-tech.com${routeCheck.path}`}</span>
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="publisherSecret">Chave de publicação</Label>
                    <Input
                      id="publisherSecret"
                      type="password"
                      value={publisherSecret}
                      onChange={(event) => {
                        const nextValue = event.target.value;
                        setPublisherSecret(nextValue);
                        window.localStorage.setItem("santos-tech.publicador.secret", nextValue);
                      }}
                      placeholder="chave definida na VPS"
                    />
                    <p className="text-sm text-muted-foreground">
                      Protege o envio e a remoção de rotas. O navegador guarda essa chave localmente.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="archive">Arquivo ZIP</Label>
                    <Input
                      id="archive"
                      type="file"
                      accept=".zip,application/zip"
                      onChange={(event) => setArchive(event.target.files?.[0] ?? null)}
                    />
                    <p className="text-sm text-muted-foreground">
                      O ZIP precisa ter `index.html` na raiz. Assets relativos vão junto no mesmo pacote.
                    </p>
                  </div>

                  {previewError ? (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                      {previewError}
                    </div>
                  ) : null}

                  {statusMessage ? (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                      {statusMessage}
                    </div>
                  ) : null}

                  {publishError ? (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                      {publishError}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-3">
                    <Button
                      disabled={!canPublish}
                      onClick={async () => {
                        if (!routeCheck.path || !archive || !preview) return;
                        setPublishing(true);
                        setPublishError(null);
                        setStatusMessage(null);
                        try {
                        const formData = new FormData();
                        formData.set("routePath", routeCheck.path);
                        formData.set("publisherSecret", publisherSecret);
                        formData.set("archive", archive);
                        const result = await publishFn({ data: formData });
                        setStatusMessage(`Publicado em ${result.routePath} com ${result.fileCount} arquivos.`);
                          setArchive(null);
                          setPreview(null);
                          await router.invalidate();
                        } catch (error) {
                          setPublishError(error instanceof Error ? error.message : "Não foi possível publicar o ZIP.");
                        } finally {
                          setPublishing(false);
                        }
                      }}
                      className="gap-2"
                    >
                      {publishing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                      Publicar rota
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setArchive(null);
                        setPreview(null);
                        setPublishError(null);
                        setStatusMessage(null);
                      }}
                    >
                      Limpar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-border/60 shadow-lg shadow-slate-900/5">
                <CardHeader>
                  <CardTitle>Mini preview do `index.html`</CardTitle>
                  <CardDescription>
                    O preview usa o HTML do ZIP selecionado. Assim dá para conferir a página antes de publicar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {preview ? (
                    <>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Título</p>
                          <p className="text-lg font-bold">{preview.title || "Sem title"}</p>
                        </div>
                        <Badge variant="secondary" className="gap-2">
                          <FileArchive className="h-3.5 w-3.5" />
                          {preview.fileName}
                        </Badge>
                      </div>

                      <iframe
                        title="Mini preview"
                        srcDoc={preview.html}
                        className="h-[380px] w-full rounded-2xl border border-border bg-white"
                        sandbox=""
                      />

                      <Separator />

                      <div className="space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Arquivos no ZIP
                        </p>
                        <ScrollArea className="h-40 rounded-xl border border-border p-3">
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {preview.assets.map((asset) => (
                              <li key={asset}>{asset}</li>
                            ))}
                          </ul>
                        </ScrollArea>
                      </div>

                      {preview.warnings.length ? (
                        <div className="space-y-2 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                          <p className="flex items-center gap-2 font-semibold">
                            <AlertTriangle className="h-4 w-4" />
                            Atenções
                          </p>
                          <ul className="space-y-1">
                            {preview.warnings.map((warning) => (
                              <li key={warning}>{warning}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                          Nenhuma advertência detectada.
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex h-[520px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 px-6 text-center">
                      <Globe className="h-10 w-10 text-primary/70" />
                      <p className="mt-4 text-lg font-bold">Escolha um ZIP para ver o preview</p>
                      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        O preview aparece aqui antes de qualquer publicação.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rotas" className="space-y-6">
            <Card className="border-border/60 shadow-lg shadow-slate-900/5">
              <CardHeader>
                <CardTitle>Rotas publicadas no volume</CardTitle>
                <CardDescription>
                  O Nginx tenta servir a rota direto do disco. Se não encontrar, cai para o app principal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {publishedSites.length ? (
                  <div className="grid gap-4">
                    {publishedSites.map((site) => (
                      <div
                        key={site.routePath}
                        className="rounded-2xl border border-border bg-background p-4 shadow-sm"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="secondary" className="font-mono">{site.routePath}</Badge>
                              <Badge className="bg-emerald-600 hover:bg-emerald-600">
                                <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                                ativo
                              </Badge>
                            </div>
                            <p className="mt-2 text-base font-semibold">{site.title || "Sem title"}</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {site.sourceFileName} · {site.fileCount} arquivos · {formatBytes(site.totalBytes)}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button asChild variant="outline" size="sm">
                              <a href={site.routePath} target="_blank" rel="noreferrer">
                                Abrir <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={async () => {
                              if (!confirm(`Remover ${site.routePath}?`)) return;
                                await deleteFn({
                                  data: { routePath: site.routePath, publisherSecret },
                                });
                                setStatusMessage(`Rota ${site.routePath} removida.`);
                                await router.invalidate();
                              }}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Remover
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center text-muted-foreground">
                    Nenhuma rota publicada ainda.
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-border/60 shadow-lg shadow-slate-900/5">
              <CardHeader>
                <CardTitle>Regras rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>1. A rota escolhida precisa ser nova e não pode bater com Início, Sobre, Cursos, Contato ou a própria aba de rotas.</p>
                <p>2. O ZIP deve ter `index.html` na raiz. Assets relativos podem ficar no mesmo pacote.</p>
                <p>3. O Nginx serve a pasta publicada diretamente do volume local e só cai no app principal se o caminho não existir.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
