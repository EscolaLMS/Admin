import { expect, test } from '@playwright/test';
import { BASE_URL, routerType } from './consts';
import { confirmDeletion, generateRandomName, searchRecord } from './helpers';

test.describe('New consultation', () => {
  test('create and delete consultation', async ({ page }) => {
    const CONSULTATION_NAME = generateRandomName('new consultation');

    await page.goto(`${BASE_URL}${routerType}other/consultations`);

    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}${routerType}other/consultations/new/attributes`);

    // Fill in the consultation form
    await page.locator('#name').fill(CONSULTATION_NAME);
    await page.locator('#active_from').fill('2022-08-01');
    await page.locator('#active_to').fill('2022-12-31');

    // Select a tutor, accounting for potential loading delays
    await page.locator('text=TutorSelect a person >> input[role="combobox"]').click();
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
