# ------------ Build ------------
FROM node:20-bookworm AS build
WORKDIR /app

# Opcional: se usar proxy interno, descomente e ajuste:
# ARG HTTP_PROXY
# ARG HTTPS_PROXY
# ENV http_proxy=$HTTP_PROXY https_proxy=$HTTPS_PROXY

# Evita travas de audit/fund e aumenta memória
ENV CI=1 \
    NPM_CONFIG_FUND=false \
    NPM_CONFIG_AUDIT=false \
    NODE_OPTIONS=--max-old-space-size=4096

# Copie só manifestos p/ aproveitar cache
COPY package.json package-lock.json* ./

# Instala dependências com fallback inteligente
# 1) tenta ci
# 2) tenta ci com legacy peer deps
# 3) tenta install com legacy peer deps
RUN set -eux; \
  if [ -f package-lock.json ]; then \
    (npm ci --no-audit --no-fund --progress=false) \
    || (npm ci --no-audit --no-fund --progress=false --legacy-peer-deps) \
    || (npm install --no-audit --no-fund --progress=false --legacy-peer-deps); \
  else \
    npm install --no-audit --no-fund --progress=false --legacy-peer-deps; \
  fi

# Agora copie o resto do projeto
COPY . .

# Build do Docusaurus
RUN npm run build

# ------------ Runtime ------------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build ./

# Cache leve (opcional)
RUN printf 'add_header Cache-Control "public, max-age=600";\n' > /etc/nginx/conf.d/cache.conf

EXPOSE 80
