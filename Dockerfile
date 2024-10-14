FROM node:22.3-alpine

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8000

CMD ["yarn", "run", "start:prod"]