FROM node:8

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY ./config ./config
COPY ./src ./src

EXPOSE 4040

CMD ["npm", "start"]