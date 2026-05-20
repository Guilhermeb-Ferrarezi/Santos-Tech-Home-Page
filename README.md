# Santos Tech Home

## Publicador de rotas estáticas

- A aba `/publicador` recebe um ZIP com `index.html` na raiz, mostra um mini preview e publica a rota escolhida.
- O conteúdo publicado é extraído em `SITE_PUBLISHER_STORAGE_DIR` e o Nginx tenta servir esse diretório antes de cair no app principal.
- Em produção, defina `SITE_PUBLISHER_SECRET` no ambiente do app e monte o mesmo volume em `/srv/site-routes` no container do Nginx.
- Rotas reservadas do site principal, como `/`, `/sobre`, `/cursos`, `/contato`, `/publicador`, `/api` e `/assets`, não podem ser sobrescritas.

## Deploy

- `Dockerfile` já expõe `SITE_PUBLISHER_STORAGE_DIR=/srv/site-routes`.
- `nginx.conf` prioriza arquivos em `/srv/site-routes` e faz fallback para o app.
- Para publicar um site, escolha uma rota, envie o ZIP e mantenha a chave de publicação salva no navegador.
