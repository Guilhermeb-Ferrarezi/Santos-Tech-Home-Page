import { useQuery } from "@tanstack/react-query";
import { me } from "@/lib/auth";

// retry:false — 401 é o estado normal de "deslogado", não vale re-tentar.
export function useSession() {
  return useQuery({
    queryKey: ["session"],
    queryFn: me,
    retry: false,
    staleTime: 60_000,
  });
}
