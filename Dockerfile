FROM node:21-alpine
WORKDIR /app
COPY package.json yarn.lock ./
COPY prisma ./
RUN yarn install
COPY . .
RUN yarn prisma generate
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start:prod"]