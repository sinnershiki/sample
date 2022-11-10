FROM node:16.13.1-alpine

WORKDIR /app

RUN mkdir -p /app

COPY apps/fe/. .

RUN npm i

EXPOSE 4000

CMD ["npm", "run", "start"]
