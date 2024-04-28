FROM node:18-alpine3.18 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . . 
COPY ./prisma ./prisma
COPY .env .
RUN npm run db:migrate
RUN npm run db:push
RUN npx test
RUN npx tsc

FROM node:18-alpine3.18
WORKDIR /app
COPY --from=build /app/build ./build
COPY package*.json ./
RUN npm install
COPY ./prisma ./prisma
COPY .env .
RUN npm run db:migrate
RUN npm run db:push
EXPOSE 3000
CMD ["node", "build/server.js"]