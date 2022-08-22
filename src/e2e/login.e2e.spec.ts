import { expect, test } from '@playwright/test';

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;
export const ADMIN_CREDENTIALS = {
  email: 'admin@escolalms.com',
  password: 'secret',
};

test(`test route page login`, async ({ page }) => {
  await page.goto(`${BASE_URL}/#/user/login`);
  await page.waitForSelector('#email');

  await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
  await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
  await page.locator('form button').click();

  await expect(page).toHaveURL(/.*welcome/);
});
