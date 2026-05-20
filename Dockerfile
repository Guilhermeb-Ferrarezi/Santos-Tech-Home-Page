FROM oven/bun:1.3.14-alpine AS base

WORKDIR /app

FROM base AS deps

COPY package.json bun.lock bunfig.toml tsconfig.json vite.config.ts wrangler.jsonc ./
COPY src ./src
COPY docker ./docker
COPY components.json ./

RUN bun install --frozen-lockfile

FROM deps AS build

RUN bun run build

FROM oven/bun:1.3.14-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV SITE_PUBLISHER_STORAGE_DIR=/srv/site-routes

RUN mkdir -p /srv/site-routes

COPY --from=build /app/dist ./dist
COPY --from=build /app/docker ./docker

EXPOSE 3000

CMD ["bun", "run", "./docker/server.ts"]
