import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, searchRecord } from './helpers';

test.describe('New product', () => {
  // test.beforeEach(async ({ page }) => {
  //   await loginAsAdmin(page);
  // });

  test('create and delete new product', async ({ page }) => {
    const PRODUCT_NAME = generateRandomName('playwright test product');

    await page.goto(`${BASE_URL}${routerType}sales/products`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}${routerType}sales/products/new`);

    await page.locator('#name').fill(PRODUCT_NAME);
    await page.locator('#purchasable').click();
    await page.locator('#price').fill('25');
    await page.locator('#price_old').fill('50');
    await page.locator('#limit_per_user').fill('1');
    await page.locator('#limit_total').fill('50');
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Product created', { state: 'visible' });

    await page.goto(`${BASE_URL}${routerType}sales/products`);

    await searchRecord(page, PRODUCT_NAME);
    await confirmDeletion(page, PRODUCT_NAME);

    await page.waitForSelector('text=Product deleted', { state: 'visible' });
  });
});
