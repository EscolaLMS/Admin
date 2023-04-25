import { expect, test } from '@playwright/test';
import { BASE_URL } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('New category', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete new category', async ({ page }) => {
    await page.goto(`${BASE_URL}/#/courses/categories`);
    await page.waitForLoadState();
    await page.locator('text=New').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/courses/categories`);
    await await page.type('#name >>nth=1', 'pwtest');
    await page.locator('#is_active >>nth=1').click();
    await page.locator('button:has-text("OK")').click();
    await page.waitForSelector('text=Success', { state: 'visible' });
    await page.locator('a:has-text("Categories")').click();
    await page.type('#name', 'pwtest');
    await page.getByRole('button', { name: /Query/i }).click();
    await new Promise((r) => setTimeout(r, 5000));
    // await page.click('.anticon-delete>>nth=1')
    await page.locator('text=pwtestpwtestpwtest-1ActiveNone >> button').nth(1).click();
    await page.locator('text=Yes').click();
    await page.waitForSelector('text=Success', { state: 'visible' });
  });
});
