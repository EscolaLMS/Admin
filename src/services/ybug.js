try {
  window.ybug_settings = { id: 'b307ykjnw50dx3pg1r2y' };
  const ybug = document.createElement('script');
  ybug.type = 'text/javascript';
  ybug.async = true;
  ybug.src = `https://widget.ybug.io/button/${window.ybug_settings.id}.js`;
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ybug, s);
} catch (er) {
  console.error('ybug error', er);
}
