docker exec api echo "APP_NAME=Wellms \
APP_ENV=local \
APP_KEY=base64:pveos6JL8iCwO3MbzoyQpNx6TETMYuUpfZ18CDKl6Cw= \
APP_DEBUG=true \
APP_LOG_LEVEL=debug \
APP_URL=http://localhost:1000 \
DB_CONNECTION=pgsql \
DB_HOST=postgres \ 
DB_PORT=5432 \
DB_DATABASE=default \
DB_USERNAME=default \
DB_PASSWORD=secret \
BROADCAST_DRIVER=log \
CACHE_DRIVER=redis \
SESSION_DRIVER=cookie \
QUEUE_DRIVER=redis \
QUEUE_CONNECTION=redis \
REDIS_HOST=redis \
REDIS_PASSWORD=escola_lms \
REDIS_PORT=6379 \
MAIL_DRIVER=smtp \
MAIL_HOST=mailhog \
MAIL_PORT=1025 \
MAIL_USERNAME=null \
MAIL_PASSWORD=null \
MAIL_ENCRYPTION= \
MJML_BINARY_PATH=/usr/bin/mjml \
TRACKER_ENABLED=false" >> .env

