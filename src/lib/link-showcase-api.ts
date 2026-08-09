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

async function fetchPublicLinkShowcaseItems(): Promise<LinkShowcasePublicItem[]> {
  const res = await fetch(`${API_URL}/public/links`);
  if (!res.ok) throw new Error(`Falha ao carregar links (status ${res.status})`);
  const data = (await res.json()) as { links: LinkShowcasePublicItem[] };
  return data.links;
}

// retry:1 — é tráfego de bio (celular, rede instável); uma tentativa extra
// antes de cair no fallback estático evita mostrar erro por uma falha isolada.
export function usePublicLinkShowcaseItems() {
  return useQuery({
    queryKey: ["public-link-showcase-items"],
    queryFn: fetchPublicLinkShowcaseItems,
    staleTime: 60_000,
    retry: 1,
  });
}
