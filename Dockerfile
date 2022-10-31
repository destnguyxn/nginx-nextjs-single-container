# Base on offical Node.js Alpine image
FROM node:latest as builder

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

# remove development dependencies
RUN yarn install --production

#######################################################

FROM nginx:alpine

WORKDIR /usr/app

RUN apk add nodejs-current npm supervisor
RUN mkdir mkdir -p /var/log/supervisor && mkdir -p /etc/supervisor/conf.d

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy nginx config files
# *.conf files in conf.d/ dir get included in main config
COPY ./nginx/default.conf /etc/nginx/conf.d/

COPY package.json next.config.js next-i18next.config.js .env* ./
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/out ./out
COPY --from=builder /usr/app/node_modules ./node_modules
# File copy for health check
COPY --from=builder /usr/app/healthy ./healthy
EXPOSE 80
# supervisor base configuration
ADD nginx/supervisor.conf /etc/supervisor.conf

ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp
# replace $PORT in nginx config (provided by executior) and start supervisord (run nextjs and nginx)
CMD supervisord -c /etc/supervisor.conf
