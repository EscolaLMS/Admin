import { expect, test } from '@playwright/test';
import { BASE_URL, ADMIN_CREDENTIALS } from './consts';

test(`test rlogout`, async ({ page }) => {
  await page.goto(BASE_URL);

  // Go to https://admin-stage.escolalms.com/#/user/login?redirect=/
  await page.waitForURL(`${BASE_URL}/#/user/login?redirect=/`);

  // Click [placeholder="Username\: admin or user"]
  await page.locator('[placeholder="Username\\: admin or user"]').click();

  // Fill [placeholder="Username\: admin or user"]
  await page.locator('[placeholder="Username\\: admin or user"]').fill('admin');

  // Press Tab
  await page.locator('[placeholder="Username\\: admin or user"]').press('Tab');

  // Click [placeholder="Username\: admin or user"]
  await page.locator('[placeholder="Username\\: admin or user"]').click();

  // Fill [placeholder="Username\: admin or user"]
  await page.locator('[placeholder="Username\\: admin or user"]').fill(ADMIN_CREDENTIALS.email);

  // Press Tab
  await page.locator('[placeholder="Username\\: admin or user"]').press('Tab');

  // Fill [placeholder="Password\: ant\.design"]
  await page.locator('[placeholder="Password\\: ant\\.design"]').fill(ADMIN_CREDENTIALS.password);

  // Click text=Remember me
  await page.locator('text=Remember me').click();

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await page.waitForURL(`${BASE_URL}/#/welcome`);

  // Click text=Logout
  await page.locator('text=Logout').click();
  await page.waitForURL(`${BASE_URL}/#/user/login?redirect=/welcome`);

  await expect(page).toHaveURL(/.*login/);

  // Close page
  await page.close();
});
