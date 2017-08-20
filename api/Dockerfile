FROM node:8

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY ./config ./config
COPY ./fixtures ./fixtures
COPY ./src ./src

EXPOSE 8080

CMD ["npm", "start"]