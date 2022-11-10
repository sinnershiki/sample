FROM node:16.13.1-alpine

WORKDIR /app

RUN mkdir -p /app

COPY apps/api/. .

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "start"]
