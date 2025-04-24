#!/bin/sh
set -e

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

cp /var/www/html/tpl.html /var/www/html/index.html

sed -ie "s~API_URL = null~API_URL=\"$API_URL\"~" /var/www/html/index.html
sed -ie "s~SENTRYDSN = null~SENTRYDSN=\"$SENTRYDSN\"~" /var/www/html/index.html
sed -ie "s~YBUG = null~YBUG=\"$YBUG\"~" /var/www/html/index.html
sed -ie "s~USERWAY = null~USERWAY=\"$USERWAY\"~" /var/www/html/index.html


echo "API URL= " $API_URL
echo "SENTRYDSN= " $SENTRYDSN
echo "YBUG= " $YBUG
echo "USERWAY= " $REACT_APP_USERWAY

# first arg is `-f` or `--some-option`
if [ "${1#-}" != "$1" ]; then
	set -- apache2-foreground "$@"
fi

exec "$@"