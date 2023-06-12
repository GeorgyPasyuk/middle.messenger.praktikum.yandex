FROM node

WORKDIR /myapp

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]

