FROM node:20-bullseye AS base

# docker image build -t abc . && docker run -p 80:80 --env API_URL="https://api-stage.escolalms.com" abc

WORKDIR /home/node/app
COPY / /home/node/app
RUN apt-get update && apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y
RUN yarn install --network-timeout 1000000000 && yarn run build && cp dist/index.html dist/tpl.html

# 8.5-apache tracks the latest 8.5.x patch; the check rejects a stale cached base image
FROM php:8.5-apache AS httpd
RUN php -r 'if (version_compare(PHP_VERSION, "8.5.12", "<")) { fwrite(STDERR, "PHP >= 8.5.12 required, got " . PHP_VERSION . PHP_EOL); exit(1); }'
ENV API_URL="http://localhost:1000"
ENV SENTRYDSN=""
ENV YBUG=""
COPY entrypoint.sh /usr/local/bin/docker-php-entrypoint
COPY --from=base /home/node/app/dist /var/www/html
COPY config/php/index.php /var/www/html/index.php
