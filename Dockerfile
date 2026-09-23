FROM oven/bun:1.3.14-alpine AS base

WORKDIR /app

FROM base AS deps

COPY package.json bun.lock bunfig.toml tsconfig.json vite.config.ts wrangler.jsonc ./
COPY src ./src
COPY docker ./docker
COPY public ./public
COPY scripts ./scripts
COPY components.json ./

RUN bun install --frozen-lockfile

FROM deps AS build

# Sem fonte no sistema, o rsvg (usado pelo sharp em scripts/generate-og-images.mjs)
# renderiza texto como tofu-box (□□□) em vez de letras — Alpine não vem com
# nenhuma fonte instalada por padrão.
RUN apk add --no-cache fontconfig font-liberation && fc-cache -f

ARG VITE_POSTHOG_KEY
ARG VITE_POSTHOG_HOST
ARG VITE_SENTRY_DSN
ARG SENTRY_AUTH_TOKEN
RUN bun run build

FROM oven/bun:1.3.14-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

RUN mkdir -p /srv/site-routes

COPY --from=build /app/dist ./dist
COPY --from=build /app/docker ./docker

EXPOSE 3000

HEALTHCHECK --interval=15s --timeout=10s --retries=5 --start-period=30s \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1

CMD ["bun", "run", "./docker/server.ts"]
