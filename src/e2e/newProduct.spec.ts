import { expect, test } from '@playwright/test';
import { BASE_URL, ADMIN_CREDENTIALS } from './consts';

test.describe('New product', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/#/user/login`);
    await page.waitForSelector('#email');

    await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
    await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
    await page.locator('form button').click();

    await expect(page).toHaveURL(/.*welcome/);
  });

  test('create and delete new product', async ({ page }) => {
    await page.goto(`${BASE_URL}/#/sales/products`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/sales/products/new`);
    await page.locator('#name').fill('playwright test product');
    await page.locator('#purchasable').click();
    await page.type('#price', '25');
    await page.type('#price_old', '50');
    await page.type('#limit_per_user', '1');
    await page.type('#limit_total', '50');
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Product created', { state: 'visible' });

    await page.goto(`${BASE_URL}/#/sales/products`);
    await page.waitForTimeout(4000);
    await page.locator('#name').fill('playwright test product');
    await page.locator('button:has-text("Query")').click();
    await page.waitForSelector('text=playwright test product255023Singletrue >> button', {
      state: 'visible',
    });
    await page.locator('text=playwright test product255023Singletrue >> button').nth(1).click();
    const ConfirmDeleteProduct = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteProduct).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();
    await page.waitForSelector('text=Product deleted', { state: 'visible' });
  });
});
