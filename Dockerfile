FROM node:20.9.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 1111
ENV PORT=1111

CMD ["npm", "start"]