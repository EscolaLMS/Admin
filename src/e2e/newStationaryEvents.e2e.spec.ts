import { expect, test } from '@playwright/test';
import { BASE_URL } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('New stationary events', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete stationary events', async ({ page }) => {
    await page.goto(`${BASE_URL}/#/other/stationary-events`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/other/stationary-events/new`);
    await page.locator('#name').fill('new event');
    await page.locator('#place').fill('Warsaw');
    await page.locator('.ant-select-selection-item').click();
    await page.locator('text=Draft').nth(1).click();
    await page.locator('#started_at').click();
    await page.locator('text=Today >> nth=0').click();
    await page.locator('#finished_at').click();
    await page.locator('text=Today >> nth=1').click();
    await page.locator("div[role='textbox'] >> nth=1").fill('test description');
    await page.locator('button:has-text("Submit")').click();

    page.once('dialog', (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.waitForSelector('text=Stationary event saved successfully', { state: 'visible' });

    await page.goto(`${BASE_URL}/#/other/stationary-events`);
    await page.waitForTimeout(3500);
    await page.locator('#name').fill('new event');
    await page.locator('button:has-text("Query")').click();
    await page.locator('text=new event2022 >> button').nth(1).click();
    const ConfirmDeleteStationaryEvent = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteStationaryEvent).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();
    await page.waitForSelector('text=Stationary event deleted successfully', { state: 'visible' });
  });
});
