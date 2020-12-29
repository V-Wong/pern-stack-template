FROM node:10-alpine
MAINTAINER V-Wong
LABEL repo=https://github.com/V-Wong/backend-template

FROM node:14 AS builder
WORKDIR /app
COPY package.json /app/
RUN yarn install
COPY ./ /app/
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
