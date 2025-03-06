import { ADMIN_CREDENTIALS, BASE_URL, routerType } from '@/e2e/consts';
import { chromium, expect } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🔐 Logging in and saving authentication state...');

  await page.goto(`${BASE_URL}${routerType}user/login`);
  await page.waitForSelector('#email');

  await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
  await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
  await page.locator('button:has-text("Login")').click();
  await page.context().storageState({ path: 'src/e2e/auth.json' });
  //   await expect(page).toHaveURL(`${BASE_URL}${routerType}welcome`, { timeout: 10000 });
  await expect(page).toHaveURL(/.*welcome/);
  // Save authentication session
  await context.storageState({ path: 'src/e2e/auth.json' });

  console.log('✅ Auth session saved successfully to src/e2e/auth.json');

  await browser.close();
}

export default globalSetup;
