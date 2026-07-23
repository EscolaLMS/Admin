// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000,
  testIgnore: ['src/**/*.test.{js,jsx,ts,tsx}'],
  //testMatch: ['src/**/.*(test|spec).(js|ts|mjs)'],
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // Laravel's built-in server (used in CI) is single-threaded, and the specs share
  // one admin login and create/delete named records — run serially in CI to avoid
  // request contention and cross-spec data races.
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 60000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',

      use: { ...devices['Desktop Chrome'] },
    },
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    */
  ],
};
export default config;
