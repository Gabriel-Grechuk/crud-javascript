FROM node:alpine
WORKDIR /usr/backend

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"]

