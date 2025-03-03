import * as Sentry from '@sentry/react';

declare const REACT_APP_SENTRYDSN: string;
declare const REACT_APP_SENTRY_RELEASE: string;
declare const REACT_APP_SENTRY_ENV: string;
declare global {
  interface Window {
    REACT_APP_SENTRYDSN: string;
    REACT_APP_SENTRY_RELEASE: string;
    REACT_APP_SENTRY_ENV: string;
  }
}

function configSentry() {
  if (
    (window.REACT_APP_SENTRYDSN || REACT_APP_SENTRYDSN) &&
    window.location.hostname.indexOf('localhost') === -1
  ) {
    Sentry.init({
      dsn: window.REACT_APP_SENTRYDSN || REACT_APP_SENTRYDSN,
      integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
      // Tracing
      tracesSampleRate: 0.1, //  Capture 100% of the transactions
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      // tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
      // Session Replay
      replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
      replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
      environment: window.REACT_APP_SENTRY_ENV || REACT_APP_SENTRY_ENV || 'development',
      release: window.REACT_APP_SENTRY_RELEASE || REACT_APP_SENTRY_RELEASE || 'dev-main',
    });
  }
  return null;
}
export default configSentry();
