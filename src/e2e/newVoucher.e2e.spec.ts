import { expect, test } from '@playwright/test';
import { BASE_URL } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('New voucher', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete new voucher', async ({ page }) => {
    const code = 'code' + getDateTicks();

    await page.goto(`${BASE_URL}/#/sales/vouchers`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/sales/vouchers/new`);
    await page.locator('#name').fill('new pwvoucher');
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
    await page.waitForTimeout(10000);
    await page.waitForLoadState();
    await page.goto(`${BASE_URL}/#/sales/orders`);
    await page.waitForTimeout(3000);
    await page.goto(`${BASE_URL}/#/sales/vouchers`);
    await page.waitForSelector('.ant-table-tbody', { state: 'visible' });
    await page.locator('text=new pwvoucherCODE >> button').nth(1).click();
    const ConfirmDeleteVoucher = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteVoucher).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();
    await page.waitForSelector('text=Coupon was deleted', { state: 'visible' });
  });
});

function getDateTicks() {
  const epochOffset = 621355968000000000;
  const ticksPerMillisecond = 10000;

  const ticks = new Date().getTime() * ticksPerMillisecond + epochOffset;

  return ticks;
}
