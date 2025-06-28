import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, searchRecord } from './helpers';

test.skip('New consultation', () => {
  test('create and delete consultation', async ({ page }) => {
    const CONSULTATION_NAME = generateRandomName('new consultation');

    await page.goto(`${BASE_URL}${routerType}other/consultations/new/attributes`);
    await page.waitForSelector('text=New consultation');

    await expect(page).toHaveURL(`${BASE_URL}${routerType}other/consultations/new/attributes`);

    // Fill in the consultation form
    await page.locator('#name').fill(CONSULTATION_NAME);
    await page.locator('#active_from').fill(new Date().toISOString().split('T')[0]);
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
    await page.locator('#active_to').fill(oneWeekFromNow.toISOString().split('T')[0]);

    // Select a tutor, accounting for potential loading delays
    await page.locator('text=Select a person >> input[role="combobox"]').click();
    await page.waitForSelector('.ant-select-dropdown .rc-virtual-list .ant-select-item-option', {
      timeout: 5000,
    });
    await page.keyboard.press('Enter'); // Select the first person in the list
    await page.locator('.ProseMirror').fill('test description');
    await page.locator('button:has-text("Submit")').click();

    page.once('dialog', (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.waitForSelector('text=Consultation saved successfully', { state: 'visible' });
    await page.waitForTimeout(3000);

    await page.goto(`${BASE_URL}${routerType}courses/list`);
    await page.waitForTimeout(3000);
    await page.goto(`${BASE_URL}${routerType}other/consultations`);

    // Search for the newly created consultation
    await searchRecord(page, CONSULTATION_NAME);

    // Confirm deletion of the consultation
    await confirmDeletion(page, CONSULTATION_NAME);

    await expect(page.getByText('Consultation deleted successfully')).toBeVisible();
  });
});
