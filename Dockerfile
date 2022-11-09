# 1. For build React app
FROM node:16 AS development
# Set working directory
WORKDIR /app
COPY package.json ./package.json
COPY healthy /tmp/healthy
# Same as npm install
COPY ./ ./
RUN yarn install
# RUN yarn build
# 2. For Nginx setup
FROM nginx:alpine
# Copy config nginx
# COPY --from=development /app/build /usr/share/nginx/html
# COPY --from=development /app/.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=development /tmp/healthy /tmp/healthy
EXPOSE 80
# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
