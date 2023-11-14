FROM node:20.9.0-alpine

WORKDIR /app

RUN npm install -g @angular/cli@latest

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["yarn", "dev"]
