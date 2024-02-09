import { expect, test } from '@playwright/test';
import { BASE_URL } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('New product', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
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
    await page.type('#name', 'playwright test product');
    await page.waitForTimeout(3000);
    await page.locator('button:has-text("Query")').click();
    // await page.waitForSelector('text=playwright test product255023Singletrue >> button', {
    //   state: 'visible',
    // });
    await page.waitForTimeout(5000);
    await page.click('.anticon-delete>>nth=0');
    // await page.locator('text=playwright test product255023Singletrue >> button').nth(1).click();
    const ConfirmDeleteProduct = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteProduct).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();
    await page.waitForSelector('text=Product deleted', { state: 'visible' });
  });
});
