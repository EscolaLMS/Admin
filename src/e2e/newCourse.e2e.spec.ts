import { expect, test } from '@playwright/test';
import { BASE_URL } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('New course', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete new course', async ({ page }) => {
    const COURSE_NAME = 'new course abc' + Math.round(Math.random() * 10000);

    await page.goto(`${BASE_URL}/#/courses/list`);
    await page.locator('text=Create new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/courses/list/new`);
    await page.locator('#title').fill(COURSE_NAME);
    await page.type('#active_from', '2022-08-01');
    await page.keyboard.press('Enter');
    await page.type('#active_to', '2022-12-31');
    await page.keyboard.press('Enter');
    await page.type('#level', 'test');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.locator('text=Draft').nth(1).click();
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Go to course page', { state: 'visible' });
    await page.locator('text=Go to course page').click();

    const courseSavedAlert = await page.locator('.ant-message-notice');
    await expect(courseSavedAlert).toContainText('Course saved successfully');

    await page.goto(`${BASE_URL}/#/courses/list`);
    await page.waitForSelector('.ant-table-tbody .ant-table-row-level-0', { state: 'visible' }); // w8 for initial list before querying
    await page.type('#title', COURSE_NAME);
    await page.locator('button:has-text("Query")').click();
    await page.waitForSelector(`text=${COURSE_NAME}`, { state: 'visible' });
    //await page.locator('text=new course abcDraft- >> button').nth(1).click();
    await page.locator(`tr:has-text("${COURSE_NAME}")`).locator('.ant-btn-dangerous').click();

    const ConfirmDeleteCourse = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteCourse).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();

    await page.waitForSelector('text=Course deleted successfully', { state: 'visible' });
  });
});
