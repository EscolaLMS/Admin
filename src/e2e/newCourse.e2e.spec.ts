import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, loginAsAdmin, searchRecord } from './helpers';

test.describe('New course', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete new course', async ({ page }) => {
    const COURSE_NAME = generateRandomName('new course abc');

    await page.goto(`${BASE_URL}${routerType}courses/list`);
    await page.locator('text=Create new').click();
    await expect(page).toHaveURL(`${BASE_URL}${routerType}courses/list/new`);

    await page.locator('#title').fill(COURSE_NAME);
    await page.locator('#active_from').fill('2022-08-01');
    await page.keyboard.press('Tab');
    await page.locator('#active_to').fill('2022-12-31');
    await page.locator('#level').fill('test');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.locator('text=Draft').nth(1).click();
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Go to course page', { state: 'visible' });
    await page.locator('text=Go to course page').click();

    const courseSavedAlert = await page.locator('.ant-message-notice');
    await expect(courseSavedAlert).toContainText('Course saved successfully');

    await page.goto(`${BASE_URL}${routerType}courses/list`);
    await page.waitForSelector('.ant-table-tbody .ant-table-row-level-0', { state: 'visible' }); // w8 for initial list before querying

    await searchRecord(page, COURSE_NAME, '#title');

    await confirmDeletion(page, COURSE_NAME);

    await page.waitForSelector('text=Course deleted successfully', { state: 'visible' });
  });
});
