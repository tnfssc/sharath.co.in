FROM node:16.15.1-alpine as build

WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN corepack enable
RUN yarn install
RUN yarn build

FROM nginx:1.22-alpine
COPY --from=build /app/dist /usr/share/nginx/html

RUN apk add --no-cache curl
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD "curl --fail http://localhost:80 || exit 1"
