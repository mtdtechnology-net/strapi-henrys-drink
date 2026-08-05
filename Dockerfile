FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app .

# Use the non-root node user
RUN mkdir -p /home/node/.config \
    && chown -R node:node /app /home/node

ENV HOME=/home/node
ENV XDG_CONFIG_HOME=/home/node/.config

USER node

EXPOSE 1337

CMD ["npm", "run", "dev"]