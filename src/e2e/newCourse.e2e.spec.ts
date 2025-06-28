import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, searchRecord } from './helpers';

test.describe('New course', () => {
  test('create and delete new course', async ({ page }) => {
    const COURSE_NAME = generateRandomName('new course abc');

    await page.goto(`${BASE_URL}${routerType}courses/list`);

    // generate test for new course
    await page.locator('text=Create new').click();
    await expect(page).toHaveURL(`${BASE_URL}${routerType}courses/list/new`);

    await page.locator('#title').fill(COURSE_NAME);
    await page.locator('#active_from').fill(new Date().toISOString().split('T')[0]);
    await page.keyboard.press('Tab');
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
    await page.locator('#active_to').fill(oneWeekFromNow.toISOString().split('T')[0]);
    await page.keyboard.press('Tab');
    await page.locator('#level').fill('test');
    await page.locator('#status').click();
    await page.waitForSelector('.ant-select-dropdown .rc-virtual-list .ant-select-item-option', {
      timeout: 5000,
    });
    await page.keyboard.press('Enter');
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Go to course page', { state: 'visible' });
    await page.locator('text=Go to course page').click();
    const courseSavedAlert = await page.locator('.ant-message-notice');
    await expect(courseSavedAlert).toContainText('Course created successfully');

    await page.goto(`${BASE_URL}${routerType}courses/list`);
    await page.waitForSelector('.ant-table-tbody .ant-table-row-level-0', { state: 'visible' }); // w8 for initial list before querying

    await searchRecord(page, COURSE_NAME, '#title');

    await confirmDeletion(page, COURSE_NAME);

    await page.waitForSelector('text=Course deleted successfully', { state: 'visible' });
  });
});
