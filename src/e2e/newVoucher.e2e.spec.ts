import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, searchRecord } from './helpers';

test.describe('New voucher', () => {
  // test.beforeEach(async ({ page }) => {
  //   await loginAsAdmin(page);
  // });

  test('create and delete new voucher', async ({ page }) => {
    const CODE_NAME = generateRandomName('test_code');

    await page.goto(`${BASE_URL}${routerType}sales/vouchers`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}${routerType}sales/vouchers/new`);
    await page.locator('#name').fill('NEW_TEST_CODE');
    await page.locator('#code').fill(CODE_NAME);
    await page.locator('input[type="radio"]').first().check();
    await page.locator('#active').click();
    await page.locator('#active_from').fill('2022-08-01');
    await page.keyboard.press('Tab');
    await page.locator('#active_to').fill('2022-12-31');
    await page.locator('#limit_usage').fill('50');
    await page.locator('#limit_per_user').fill('1');
    await page.locator('#min_cart_price').fill('10');
    await page.locator('#max_cart_price').fill('100');
    await page.locator('#amount').fill('5');
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=success', { state: 'visible' });
    await page.waitForTimeout(3000);
    await page.goto(`${BASE_URL}${routerType}sales/vouchers`);

    await searchRecord(page, CODE_NAME, '#code');

    await confirmDeletion(page, CODE_NAME.toUpperCase());

    await page.waitForSelector('text=Coupon was deleted', { state: 'visible' });
  });
});
