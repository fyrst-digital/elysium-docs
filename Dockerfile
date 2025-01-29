# Todo: make version dynamic via build args or env vars
FROM caddy:2.9.1-alpine

# install dependencies
RUN apk add --no-cache shadow bash curl

COPY .vitepress/dist /srv