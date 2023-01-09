import * as Sentry from '@sentry/react';

declare const REACT_APP_SENTRYDSN: string;
declare global {
  interface Window {
    REACT_APP_SENTRYDSN: string;
  }
}

function configSentry() {
  if (
    (window.REACT_APP_SENTRYDSN || REACT_APP_SENTRYDSN) &&
    window.location.hostname.indexOf('localhost') === -1
  ) {
    Sentry.init({
      dsn: window.REACT_APP_SENTRYDSN || REACT_APP_SENTRYDSN,
    });
  }
  return null;
}
export default configSentry();
