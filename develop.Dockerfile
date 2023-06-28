FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install -g next

RUN npm install

COPY . /usr/src/app

RUN npm run build

COPY --chown=10101 ./public /usr/src/app/public

ENV DB_LOCAL_URL=mongodb://mongo:27017/denizpaz

EXPOSE 3000

CMD npm run launch
