import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, loginAsAdmin, searchRecord } from './helpers';

test.describe('New user', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create new user', async ({ page }) => {
    const email = generateRandomName('newuser') + '@pwtest.pl';

    await page.goto(`${BASE_URL}${routerType}configuration/settings/escola_auth`);
    await page.waitForLoadState();
    await page.waitForSelector('text=Settings', { state: 'visible' });
    await page.click('[data-row-key="return_url"] button');
    await page.getByRole('textbox', { name: 'Please enter' }).fill('');
    await page.getByRole('textbox', { name: 'Please enter' }).fill('http://localhost');
    await page.click('text=OK');
    await page.waitForTimeout(2000);
    await page.waitForLoadState();

    await page.goto(`${BASE_URL}${routerType}users/list`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}${routerType}users/list/new`);
    await page.locator('#first_name').fill('new');
    await page.locator('#last_name').fill('user');
    await page.locator('#email').fill(email);
    await page.locator('#password').fill('Testowanie1!');
    await page.waitForTimeout(7000);
    await page.click('.ant-checkbox-input >> nth = 0');
    await page.click('.ant-checkbox-input >> nth = 1');
    await page.locator('#is_active').click();
    await page.locator('text=student').click();
    await page.locator('button:has-text("Submit")').click();
    // await page.waitForSelector('text=Created user', { state: 'visible' });
    await page.waitForTimeout(5000);

    await page.goto(`${BASE_URL}${routerType}users/list`);
    await page.waitForTimeout(4000);

    await searchRecord(page, email, '#search');
    // await page.locator('text=@pwtest.plActiveUnverifiedstudent- >> button').nth(1).click();
    await confirmDeletion(page, email);
    // await page.waitForSelector('text=No Data', { state: 'visible' });
  });
});
