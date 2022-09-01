import { expect, test } from '@playwright/test';
import { BASE_URL, ADMIN_CREDENTIALS } from './consts';

test.describe('New voucher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/#/user/login`);
    await page.waitForSelector('#email');

    await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
    await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
    await page.locator('form button').click();

    await expect(page).toHaveURL(/.*welcome/);
  });

  test('create new voucher', async ({ page }) => {
    const code = 'code' + getDateTicks();

    await page.goto(`${BASE_URL}/#/sales/vouchers`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/sales/vouchers/new`);
    await page.locator('#name').fill('new voucher');
    await page.type('#code', code);
    await page.locator('input[type="radio"]').first().check();
    await page.locator('#active').click();
    await page.type('#active_from', '2022-08-01');
    await page.keyboard.press('Enter');
    await page.type('#active_to', '2022-12-31');
    await page.keyboard.press('Enter');
    await page.type('#limit_usage', '50');
    await page.type('#limit_per_user', '1');
    await page.type('#min_cart_price', '10');
    await page.type('#max_cart_price', '100');
    await page.type('#amount', '5');
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=success', { state: 'visible' });
    await page.goto(`${BASE_URL}/#/sales/vouchers`);
  });
});

function getDateTicks() {
  const epochOffset = 621355968000000000;
  const ticksPerMillisecond = 10000;

  const ticks = new Date().getTime() * ticksPerMillisecond + epochOffset;

  return ticks;
}
