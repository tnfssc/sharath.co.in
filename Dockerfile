FROM node:18 as build
RUN corepack enable
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
ENV USE_NODE_ADAPTER=1
ENV ORIGIN=http://localhost:3000
RUN yarn build

FROM node:18
RUN corepack enable
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --omit=dev
RUN yarn cache clean

COPY --from=build /app/build .

ENV NODE_ENV=production
ENV ORIGIN=http://localhost:3000
ENV PORT=3000
EXPOSE 3000
CMD ["node", "index.js"]
