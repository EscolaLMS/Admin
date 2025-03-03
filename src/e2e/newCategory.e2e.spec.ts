import { test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, loginAsAdmin, searchRecord } from './helpers';

test.describe('New category', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete new category', async ({ page }) => {
    const CATEGORY_NAME = generateRandomName('new pwCategory');

    await page.goto(`${BASE_URL}${routerType}courses/categories`);
    await page.waitForLoadState();
    await page.locator('text=New').click();
    await page.waitForSelector('.ant-modal');
    await page.click('.ant-modal-body #name');
    await page.keyboard.type(CATEGORY_NAME);
    await page.locator('#is_active >>nth=1').click();
    await page.locator('button:has-text("OK")').click();
    await page.waitForSelector('text=Success', { state: 'visible' });

    await searchRecord(page, CATEGORY_NAME);
    await confirmDeletion(page, CATEGORY_NAME);

    await page.waitForSelector('text=Success', { state: 'visible' });
  });
});
