import { expect, test } from '@playwright/test';
import { BASE_URL } from './consts';
import { loginAsAdmin } from './helpers';

test.describe('New consultation', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('create and delete consultation', async ({ page }) => {
    await page.goto(`${BASE_URL}/#/other/consultations`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/other/consultations/new`);
    await page.locator('#name').fill('new consultation');
    await page.type('#active_from', '2022-08-01');
    await page.keyboard.press('Enter');
    await page.type('#active_to', '2022-12-31');
    await page.keyboard.press('Enter');
    await page.locator('text=TutorSelect a person >> input[role="combobox"]').click();
    await page.waitForTimeout(6000);
    await page.keyboard.press('Enter');
    await page.locator('.ProseMirror').fill('test description');
    await page.locator('button:has-text("Submit")').click();

    page.once('dialog', (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.waitForSelector('text=Consultation saved successfully', { state: 'visible' });

    await page.goto(`${BASE_URL}/#/other/consultations`);
    await page.waitForTimeout(3500);
    await page.locator('#name').fill('new consultation');
    await page.locator('button:has-text("Query")').click();
    await page.locator('text=new consultationDraft >> button').nth(1).click();
    const ConfirmDeleteConsultation = await page.locator('.ant-popover-message');
    await expect(ConfirmDeleteConsultation).toContainText('Are you sure to delete this record?');
    await page.locator('button:has-text("Yes")').click();
    await page.waitForSelector('text=Consultation deleted successfully', { state: 'visible' });
  });
});
