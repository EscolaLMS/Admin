import { test } from '@playwright/test';
import { ADMIN_CREDENTIALS, BASE_URL } from './consts';

test(`test route page login`, async ({ page }) => {
  await page.goto(`${BASE_URL}/#/user/login`);
  await page.waitForSelector('#email');

  await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
  await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
  await page.locator('form button').click();
  // await expect(page).toHaveURL(/.*welcome/);
  await page.waitForLoadState();
});
