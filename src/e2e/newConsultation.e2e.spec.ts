import { expect, test } from '@playwright/test';
import { BASE_URL, ADMIN_CREDENTIALS } from './consts';

test.describe('New consultation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/#/user/login`);
    await page.waitForSelector('#email');

    await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
    await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
    await page.locator('form button').click();

    await expect(page).toHaveURL(/.*welcome/);
  });

  test('create new consultation', async ({ page }) => {
    await page.goto(`${BASE_URL}/#/other/consultations`);
    await page.locator('text=new').click();
    await expect(page).toHaveURL(`${BASE_URL}/#/other/consultations/new`);
    await page.locator('#name').fill('new consultation');
    await page.type('#active_from', '2022-08-01');
    await page.keyboard.press('Enter');
    await page.type('#active_to', '2022-12-31');
    await page.keyboard.press('Enter');
    await page.locator('text=TutorSelect a person >> input[role="combobox"]').click();
    await page.waitForSelector('text=Angela Yu', { state: 'visible' });
    await page.locator('text=Angela Yu').click();
    await page.locator('.ProseMirror').fill('test description');
    await page.locator('button:has-text("Submit")').click();

    page.once('dialog', (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.waitForSelector('text=Consultation saved successfully', { state: 'visible' });
  });
});
