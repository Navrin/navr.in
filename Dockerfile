FROM node as build

WORKDIR /personal/

ADD package.json ./package.json
ADD yarn.lock ./yarn.lock

RUN yarn

ADD . .

RUN yarn build