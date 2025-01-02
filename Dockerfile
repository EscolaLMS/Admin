FROM node:20-buster AS base

# docker image build -t abc . && docker run -p 80:80 --env API_URL="https://api-stage.escolalms.com" abc

WORKDIR /home/node/app
COPY / /home/node/app
RUN apt-get update && apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y
RUN yarn install --network-timeout 1000000000 && yarn run build && cp dist/index.html dist/tpl.html

FROM php:apache AS httpd
ENV API_URL="http://localhost:1000"
ENV SENTRYDSN=""
ENV YBUG=""
ENV ADMIN_VERSION="dev-main"
COPY entrypoint.sh /usr/local/bin/docker-php-entrypoint
COPY --from=base /home/node/app/dist /var/www/html
COPY config/php/index.php /var/www/html/index.php
RUN echo "${ADMIN_VERSION}" > /var/www/html/version
