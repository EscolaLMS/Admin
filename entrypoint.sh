#!/bin/sh
set -e

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

cp /var/www/html/tpl.html /var/www/html/index.html

sed -ie "s~API_URL = null~API_URL=\"$API_URL\"~" /var/www/html/index.html
sed -ie "s~SENTRYDSN = null~SENTRYDSN=\"$SENTRYDSN\"~" /var/www/html/index.html
sed -ie "s~YBUG = null~YBUG=\"$YBUG\"~" /var/www/html/index.html

echo "API URL= " $API_URL
echo "SENTRYDSN= " $SENTRYDSN
echo "YBUG= " $YBUG

cat <<EOF > /var/www/html/.htaccess
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.php [L]
</IfModule>
EOF

# first arg is `-f` or `--some-option`
if [ "${1#-}" != "$1" ]; then
	set -- apache2-foreground "$@"
fi

exec "$@"