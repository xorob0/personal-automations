FROM node:16.14.0
WORKDIR /sources

ARG NODE_ENV=production
ARG API_URL
ARG API_TOKEN
ARG ALARM_CODE

ENV NODE_ENV=${NODE_ENV}
ENV API_URL=${API_URL}
ENV API_TOKEN=${API_TOKEN}
ENV ALARM_CODE=${ALARM_CODE}

COPY ./*.json ./
COPY apps/. ./apps/
COPY packages/. ./packages/

RUN npm i --production

ENTRYPOINT ["node", "./apps/home/dist/index.js"]
