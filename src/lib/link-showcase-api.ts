import { useQuery } from "@tanstack/react-query";

const API_URL = "https://api.santos-tech.com";

export type LinkShowcasePublicItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  url: string;
  ordem: number;
};

export type LinkShowcasePublicData = {
  links: LinkShowcasePublicItem[];
  backgroundImageUrl: string | null;
};

async function fetchPublicLinkShowcaseData(): Promise<LinkShowcasePublicData> {
  const res = await fetch(`${API_URL}/public/links`);
  if (!res.ok) throw new Error(`Falha ao carregar links (status ${res.status})`);
  const data = (await res.json()) as { links: LinkShowcasePublicItem[]; backgroundImageUrl: string | null };
  return { links: data.links, backgroundImageUrl: data.backgroundImageUrl ?? null };
}

// retry:1 — é tráfego de bio (celular, rede instável); uma tentativa extra
// antes de cair no fallback estático evita mostrar erro por uma falha isolada.
export function usePublicLinkShowcaseItems() {
  return useQuery({
    queryKey: ["public-link-showcase-items"],
    queryFn: fetchPublicLinkShowcaseData,
    staleTime: 60_000,
    retry: 1,
  });
}
