import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

declare const REACT_APP_SENTRYDSN: string;
declare const REACT_APP_SENTRY_RELEASE: string;
declare global {
  interface Window {
    REACT_APP_SENTRYDSN: string;
    REACT_APP_SENTRY_RELEASE: string;
  }
}

function configSentry() {
  if (
    (window.REACT_APP_SENTRYDSN || REACT_APP_SENTRYDSN) &&
    window.location.hostname.indexOf('localhost') === -1
  ) {
    Sentry.init({
      dsn: window.REACT_APP_SENTRYDSN || REACT_APP_SENTRYDSN,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1,
      release: `admin-${REACT_APP_SENTRY_RELEASE || ''}`,
    });
  }
  return null;
}
export default configSentry();
