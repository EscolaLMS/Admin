import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('Logout test', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });
  test(`test logout`, async ({ page }) => {
    // document.querySelector('.avatar-dropdown').dispatchEvent(new MouseEvent('mouseover', { bubbles: true}));

    await page.locator('.avatar-dropdown').dispatchEvent('mouseover', { bubbles: true });

    // Click text=Logout
    await page.waitForSelector('text=Logout');
    await page.locator('text=Logout').click();
    await page.waitForURL(`${BASE_URL}${routerType}user/login?redirect=/welcome`);

    await expect(page).toHaveURL(/.*login/);

    // Close page
    await page.close();
  });
});
