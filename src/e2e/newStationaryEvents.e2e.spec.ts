import { expect, test } from '@playwright/test';
import { format } from 'date-fns';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, searchRecord } from './helpers';

test.describe('New stationary events', () => {
  test('create and delete stationary events', async ({ page }) => {
    const EVENT_NAME = generateRandomName('new event');
    const today = format(new Date(), 'yyyy-MM-dd');

    await page.goto(`${BASE_URL}${routerType}other/stationary-events`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}${routerType}other/stationary-events/new`);

    await page.locator('#name').fill(EVENT_NAME);
    await page.locator('#place').fill('Warsaw');
    await page.locator('.ant-select-selection-item').click();
    await page.locator('text=Draft').nth(1).click();
    await page.locator('#started_at').fill(today);
    await page.keyboard.press('Tab');
    await page.locator('#finished_at').fill(today);
    await page.locator('#short_desc').fill('short desctiption');
    await page.click('.placeholder >>nth=0');
    await page.locator('.form-wysiwyg-markdown p').first().click();
    await page.keyboard.type('program test');
    await page.locator('.form-wysiwyg-markdown p').last().click();
    await page.keyboard.type('Description test');
    await page.locator('button:has-text("Submit")').click();

    page.once('dialog', (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.waitForSelector('text=Stationary event saved successfully', { state: 'visible' });

    await page.goto(`${BASE_URL}${routerType}other/stationary-events`);
    await searchRecord(page, EVENT_NAME);
    await confirmDeletion(page, EVENT_NAME);
    await page.waitForSelector('text=Stationary event deleted successfully', { state: 'visible' });
  });
});
