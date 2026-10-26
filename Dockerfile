ARG NODE_VERSION=22.12.0
# PHP >= 8.5.12 / 8.4.27 / 8.3.36 / 8.2.35 required (CVE-2026-109618, CVE-2026-109619)
ARG PHP_VERSION=8.5.12
FROM node:${NODE_VERSION}-bookworm AS base

# docker image build -t abc . && docker run -p 80:80 --env API_URL="https://api-stage.escolalms.com" abc

WORKDIR /home/node/app
COPY / /home/node/app
RUN apt-get update && apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y
RUN yarn install --network-timeout 1000000000 && yarn run build && cp dist/index.html dist/tpl.html

FROM php:${PHP_VERSION}-apache AS httpd
# Fail the build on PHP vulnerable to CVE-2026-109618 / CVE-2026-109619
RUN php -r '$fixed = ["8.5" => "8.5.12", "8.4" => "8.4.27", "8.3" => "8.3.36", "8.2" => "8.2.35"]; \
    $min = $fixed[PHP_MAJOR_VERSION . "." . PHP_MINOR_VERSION] ?? null; \
    if (!$min || version_compare(PHP_VERSION, $min, "<")) { fwrite(STDERR, "PHP " . PHP_VERSION . " is vulnerable to CVE-2026-109618/109619\n"); exit(1); }'
ENV API_URL="http://localhost:1000"
ENV SENTRYDSN=""
ENV YBUG=""
COPY entrypoint.sh /usr/local/bin/docker-php-entrypoint
COPY --from=base /home/node/app/dist /var/www/html
COPY config/php/index.php /var/www/html/index.php
