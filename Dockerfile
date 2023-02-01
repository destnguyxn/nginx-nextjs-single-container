FROM node:18 AS development
WORKDIR /app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY ./ ./
RUN yarn install 
RUN yarn build 
CMD yarn start