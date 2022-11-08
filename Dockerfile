FROM node:latest as node
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]