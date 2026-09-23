# Santos Tech Home

## Deploy

- O app roda via Bun (`docker/server.ts`), exposto direto na porta 3000, sem
  proxy reverso na frente dentro do container.
- O próprio `docker/server.ts` prioriza os arquivos estáticos gerados do build
  e cai pro SSR (`worker.fetch`) quando a rota não é um arquivo.
