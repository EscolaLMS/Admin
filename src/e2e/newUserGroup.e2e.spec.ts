import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, loginAsAdmin, searchRecord } from './helpers';

test.describe('New user group', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete new user group', async ({ page }) => {
    const USER_GROUP_NAME = generateRandomName('new user group');

    await page.goto(`${BASE_URL}${routerType}users/groups`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}${routerType}users/groups/new`);
    await page.locator('#name').fill(USER_GROUP_NAME);
    await page.locator('#registerable').click();
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Group created', { state: 'visible' });

    await page.goto(`${BASE_URL}${routerType}users/groups`);

    await searchRecord(page, USER_GROUP_NAME, '#search');

    await confirmDeletion(page, USER_GROUP_NAME);

    await searchRecord(page, USER_GROUP_NAME, '#search');
    await page.waitForSelector('text=No Data', { state: 'visible' });
  });
});
