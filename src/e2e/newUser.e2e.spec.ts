import { expect, test } from '@playwright/test';
import { BASE_URL, ADMIN_CREDENTIALS } from './consts';

test.describe('New user', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/#/user/login`);
    await page.waitForSelector('#email');

    await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
    await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
    await page.locator('form button').click();

    await expect(page).toHaveURL(/.*welcome/);
  });

  test('create new user', async ({ page }) => {
    const email = 'newuser' + getDateTicks() + '@test.pl';

    await page.goto(`${BASE_URL}/#/users/list`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/users/list/new`);
    await page.type('#first_name', 'new');
    await page.type('#last_name', 'user');
    await page.type('#email', email);
    await page.type('#password', 'Testowanie1!');
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Created user', { state: 'visible' });
  });
});

function getDateTicks() {
  const epochOffset = 621355968000000000;
  const ticksPerMillisecond = 10000;

  const ticks = new Date().getTime() * ticksPerMillisecond + epochOffset;

  return ticks;
}
