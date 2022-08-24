import { expect, test } from '@playwright/test';
import { BASE_URL, ADMIN_CREDENTIALS } from './consts';

test.describe('New course', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/#/user/login`);
    await page.waitForSelector('#email');

    await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
    await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
    await page.locator('form button').click();

    await expect(page).toHaveURL(/.*welcome/);
  });

  test('create and delete new course', async ({ page }) => {
    await page.goto(`${BASE_URL}/#/courses/list`);
    await page.locator('text=Create new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/courses/list/new`);
    await page.locator('#title').fill('new course abc');
    await page.locator('#active_from').click();
    await page.locator('text=24').click();
    await page.locator('#active_to').click();
    await page.locator('text=31').nth(3).click();
    await page
      .locator(
        'div:nth-child(4) > .ant-form-item > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item',
      )
      .click();
    await page.locator('text=Draft').nth(1).click();
    await page.locator('button:has-text("Submit")').click();
    await page.waitForSelector('text=Go to course page', { state: 'visible' });
    await page.locator('text=Go to course page').click();

    const courseSavedAlert = await page.locator('.ant-message-notice');
    await expect(courseSavedAlert).toContainText('Course saved successfully');

    await page.goto(`${BASE_URL}/#/courses/list`);
    await page.type('#title', 'new course abc');
    await page.locator('button:has-text("Query")').click();
    await page.locator('text=new course abcDraft- >> button').nth(1).click();

    const ConfirmDeleteCourse = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteCourse).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();

    await page.waitForSelector('text=Course deleted successfully', { state: 'visible' });
  });
});
