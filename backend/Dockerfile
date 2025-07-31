FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["sh", "-c", "node -r ts-node/register src/setup-db.ts || true && node -r ts-node/register src/server.ts"]
