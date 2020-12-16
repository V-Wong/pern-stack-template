FROM node:10-alpine
MAINTAINER V-Wong
LABEL repo=https://github.com/V-Wong/backend-template

WORKDIR /usr/app
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]