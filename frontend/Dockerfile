FROM node:10-alpine
MAINTAINER V-Wong
LABEL repo=https://github.com/V-Wong/backend-template

FROM node:14 AS builder
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY ./frontend/package.json ./frontend/tsconfig.json ./
COPY ./frontend/src ./src
COPY ./frontend/public ./public
COPY ./types/ /usr/types
RUN yarn install
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=builder usr/app/build/ /usr/share/nginx/html
COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf
