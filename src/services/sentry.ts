import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

declare const REACT_APP_SENTRYDSN: string;
declare global {
  interface Window {
    REACT_APP_SENTRYDSN: string;
  }
}

function configSentry() {
  if (
    (window.REACT_APP_SENTRYDSN || REACT_APP_SENTRYDSN) &&
    true
    //window.location.hostname.indexOf('localhost') === -1
  ) {
    Sentry.init({
      dsn: window.REACT_APP_SENTRYDSN || REACT_APP_SENTRYDSN,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1,
    });
  }
  return null;
}
export default configSentry();
