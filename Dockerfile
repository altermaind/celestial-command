# Multi-stage Dockerfile for building and serving a Vite + React + TypeScript app
# Build stage
FROM node:20-slim AS builder
WORKDIR /app

# Install dependencies (copy package files first for better cache)
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund --silent

# Copy source and build
COPY . .
RUN npm run build

# Production stage: serve with nginx
FROM nginx:stable-alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
