FROM node:alpine
WORKDIR /usr/backend

ENV POSTGRES_DB cadastros
COPY cadastros.sql /docker-entrypoint-initdb.d/

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"]

