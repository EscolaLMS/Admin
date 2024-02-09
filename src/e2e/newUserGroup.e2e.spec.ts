import { expect, test } from '@playwright/test';
import { BASE_URL } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('New user group', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete new user group', async ({ page }) => {
    await page.goto(`${BASE_URL}/#/users/groups`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/users/groups/new`);
    await page.locator('#name').fill('pwtesters');
    await page.locator('#registerable').click();
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Group created', { state: 'visible' });

    await page.goto(`${BASE_URL}/#/users/groups`);
    await page.locator('#search').fill('pwtesters');
    await page.locator('button:has-text("Query")').click();
    await page.locator('text=pwtesterspwtesterstrueNone >> button').nth(1).click();

    const ConfirmDeleteUserGroup = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteUserGroup).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();
    await page.locator('#search').fill('pwtesters');
    await page.locator('button:has-text("Query")').click();
    await page.waitForSelector('text=No Data', { state: 'visible' });
  });
});
