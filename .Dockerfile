FROM node:12-alpine
MAINTAINER V-Wong
LABEL repo=https://github.com/V-Wong/backend-template

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json tsconfig.json ./
COPY src ./src
RUN npm install

EXPOSE 4000 
CMD [ "npm", "run", "start" ]