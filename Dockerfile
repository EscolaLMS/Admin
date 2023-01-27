FROM node:16-buster AS base

# docker image build -t abc . && docker run -p 80:80 --env API_URL="https://api-stage.escolalms.com" abc

WORKDIR /home/node/app
COPY / /home/node/app
RUN apt-get update && apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y
RUN yarn install && yarn run build && cp dist/index.html dist/tpl.html

FROM httpd:latest AS httpd
ENV API_URL="http://localhost:1000"
ENV SENTRYDSN=""
ENV YBUG=""
COPY entrypoint.sh /usr/local/bin/httpd-foreground
COPY --from=base /home/node/app/dist /usr/local/apache2/htdocs/