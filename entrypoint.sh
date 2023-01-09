#!/bin/sh
set -e

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

cp /usr/local/apache2/htdocs/tpl.html /usr/local/apache2/htdocs/index.html

sed -ie "s~API_URL = null~API_URL=\"$API_URL\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~SENTRYDSN = null~SENTRYDSN=\"$SENTRYDSN\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~YBUG = null~YBUG=\"$YBUG\"~" /usr/local/apache2/htdocs/index.html

sed -ie "s~API_URL = null~API_URL=\"$API_URL\"~"  dist/index.html
sed -ie "s~SENTRYDSN = null~SENTRYDSN=\"$SENTRYDSN\"~"  dist/index.html
sed -ie "s~YBUG = null~YBUG=\"$YBUG\"~"  dist/index.html

echo "API URL= " $API_URL
echo "SENTRYDSN= " $SENTRYDSN
echo "YBUG= " $YBUG

exec httpd -DFOREGROUND "$@"