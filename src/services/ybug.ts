declare const REACT_APP_YBUG: string;
declare global {
  interface Window {
    ybug_settings: any;
    REACT_APP_YBUG: string;
  }
}

function configYbug() {
  const YBUG_ID = window.REACT_APP_YBUG || REACT_APP_YBUG;
  if (YBUG_ID) {
    try {
      window.ybug_settings = { id: YBUG_ID };
      const ybug = document.createElement('script');
      ybug.type = 'text/javascript';
      ybug.async = true;
      ybug.src = `https://widget.ybug.io/button/${window.ybug_settings.id}.js`;
      const s = document.getElementsByTagName('script')[0];
      if (s.parentNode) {
        s.parentNode.insertBefore(ybug, s);
      }
    } catch (er) {
      console.error('ybug error', er);
    }
  }
}

export default configYbug();
