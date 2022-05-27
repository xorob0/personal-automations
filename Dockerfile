FROM node:16.14.0-alpine3.15
WORKDIR /sources

ARG NODE_ENV=production
ARG API_URL
ARG API_TOKEN

ENV NODE_ENV=${NODE_ENV}
ENV API_URL=${API_URL}
ENV API_TOKEN=${API_TOKEN}

COPY ./*.json ./
COPY apps/. ./apps/
COPY node_modules/. ./node_modules/

ENTRYPOINT ["node", "./apps/home/dist/index.js"]