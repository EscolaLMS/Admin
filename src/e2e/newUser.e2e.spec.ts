import { expect, test } from '@playwright/test';
import { BASE_URL } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('New user', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create new user', async ({ page }) => {
    const email = 'newuser' + getDateTicks() + '@pwtest.pl';

    await page.goto(`${BASE_URL}/#/users/list`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/users/list/new`);
    await page.type('#first_name', 'new');
    await page.type('#last_name', 'user');
    await page.type('#email', email);
    await page.type('#password', 'Testowanie1!');
    await page.waitForTimeout(10000);
    await page.click('.ant-checkbox-input >> nth = 0');
    await page.click('.ant-checkbox-input >> nth = 1');
    await page.locator('#is_active').click();
    await page.locator('text=student').click();
    await page.locator('button:has-text("Submit")').click();
    // await page.waitForSelector('text=Created user', { state: 'visible' });
    await page.waitForTimeout(10000);

    await page.goto(`${BASE_URL}/#/users/list`);
    await page.waitForTimeout(6000);
    await page.locator('#search').fill(email);
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: /Query/i }).click();
    await page.waitForTimeout(5000);
    // await page.locator('text=@pwtest.plActiveUnverifiedstudent- >> button').nth(1).click();
    await page.click('.anticon-delete>>nth=0');

    const ConfirmDeleteUser = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteUser).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();
    // await page.waitForSelector('text=No Data', { state: 'visible' });
  });
});

function getDateTicks() {
  const epochOffset = 621355968000000000;
  const ticksPerMillisecond = 10000;

  const ticks = new Date().getTime() * ticksPerMillisecond + epochOffset;

  return ticks;
}
