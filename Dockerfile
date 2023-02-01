FROM node:18 AS development
WORKDIR /app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY ./ ./
RUN yarn install 
RUN yarn build 
CMD yarn start

#  2. For Nginx setup
FROM nginx:alpine
RUN unlink /var/log/nginx/access.log
RUN unlink /var/log/nginx/error.log
# Copy config nginx
COPY --from=development /app/.nginx.conf /etc/nginx/conf.d/default.conf

# File copy for health check
COPY --from=development /healthy /tmp/healthy
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]