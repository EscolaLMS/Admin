// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000,
  testIgnore: ['src/**/*.test.{js,jsx,ts,tsx}'],
  //testMatch: ['src/**/.*(test|spec).(js|ts|mjs)'],
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 60000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: 'src/e2e/auth.json',
  },
  globalSetup: 'src/e2e/globalSetup.ts',
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
