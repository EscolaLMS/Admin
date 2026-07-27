import { expect, test } from '@playwright/test';
import { ADMIN_CREDENTIALS, BASE_URL } from './consts';

test(`test route page login`, async ({ page }) => {
  await page.goto(`${BASE_URL}/#/user/login`);
  await page.waitForSelector('#email');

  await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
  await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
  await page.locator('form button').click();
  // Assert the post-login redirect actually happens — without this the test
  // "passes" even when login is completely broken (e.g. the API is unreachable).
  await expect(page).toHaveURL(`${BASE_URL}/#/welcome`, { timeout: 30000 });
});
