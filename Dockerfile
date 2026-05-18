FROM node:22-alpine AS build

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine AS runtime

ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY cloud-run-server.mjs ./cloud-run-server.mjs

EXPOSE 8080
CMD ["node", "cloud-run-server.mjs"]
