# ------------ Build ------------
FROM node:20-bookworm AS build
WORKDIR /app

ENV CI=1 \
    NPM_CONFIG_FUND=false \
    NPM_CONFIG_AUDIT=false \
    NODE_OPTIONS=--max-old-space-size=4096

# -- DICAS: se você tem proxy corporativo, descomente:
# ARG HTTP_PROXY
# ARG HTTPS_PROXY
# ENV http_proxy=$HTTP_PROXY https_proxy=$HTTPS_PROXY

# Para ver o erro real do npm
RUN node -v && npm -v && npm config set loglevel verbose

# (Opcional, só se sua rede intercepta TLS)
# RUN npm config set strict-ssl false

# Copie manifestos primeiro (cache melhor)
COPY package.json package-lock.json* ./

# Instalação com fallback + mais tentativas de rede
RUN set -eux; \
  npm config set fetch-retries 5; \
  npm config set fetch-retry-maxtimeout 60000; \
  if [ -f package-lock.json ]; then \
    (npm ci --no-audit --no-fund --progress=false) \
    || (npm ci --no-audit --no-fund --progress=false --legacy-peer-deps) \
    || (npm install --no-audit --no-fund --progress=false --legacy-peer-deps); \
  else \
    npm install --no-audit --no-fund --progress=false --legacy-peer-deps; \
  fi

# Copie o restante e builde
COPY . .
RUN npm run build

# ------------ Runtime ------------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build ./
EXPOSE 80
