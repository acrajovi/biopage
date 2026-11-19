# ========================================================
# biopage — Vite estático → nginx:alpine
# Imagen final esperada: ~50 MB (vs ~1 GB con Nixpacks)
# Build context: raíz del repo
# ========================================================

FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
RUN printf '%s\n' \
  'server {' \
  '  listen 80;' \
  '  server_name _;' \
  '  root /usr/share/nginx/html;' \
  '  index index.html;' \
  '  location / { try_files $uri $uri/ /index.html; }' \
  '  location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|woff2?)$ { expires 1y; add_header Cache-Control "public, immutable"; }' \
  '}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
