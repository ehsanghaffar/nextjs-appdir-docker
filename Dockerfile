# base image

FROM node:18-alpine

# create & set working directory

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# copy source files

COPY . /usr/src/app

# install dependencies

RUN npm install -g next

RUN npm install

# start app

RUN npm run build

EXPOSE 3000

CMD npm run launch
