FROM node:21-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
COPY prisma .
COPY . .
RUN yarn install --frozen-lockfile \
    && yarn build \
    && yarn install --production --frozen-lockfile

FROM node:21-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env .
COPY --from=builder /app/prisma .
COPY --from=builder /app/.next ./.next

EXPOSE 3000
CMD ["yarn", "start:prod"]