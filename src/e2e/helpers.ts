import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { ADMIN_CREDENTIALS, BASE_URL, routerType } from './consts';

export const loginAsAdmin = async (page: Page) => {
  await page.goto(`${BASE_URL}${routerType}user/login`);
  await page.waitForSelector('#email');

  await page.locator('input[id="email"]').fill(ADMIN_CREDENTIALS.email);
  await page.locator('input[id="password"]').fill(ADMIN_CREDENTIALS.password);
  await page.locator('button:has-text("Login")').click();

  await expect(page).toHaveURL(`${BASE_URL}${routerType}welcome`, { timeout: 10000 });
};

// Helper function to confirm deletion of a record in a table
export const confirmDeletion = async (page: Page, recordName: string) => {
  const row = page.locator(`//tr[td[contains(text(), "${recordName}")]]`).first();
  await row.locator('span[aria-label=delete]').click();
  const confirmDeleteDialog = page.locator('.ant-popover-content');

  // Verify the confirmation message and click 'Yes'
  await expect(confirmDeleteDialog).toContainText('Are you sure to delete this record?');
  await confirmDeleteDialog.getByText('Yes').click();
};

// Helper function to search for a record in a table
export const searchRecord = async (page: Page, recordName: string, inputId?: string) => {
  await page.locator(`.ant-pro-table ${inputId ? inputId : '#name'}`).fill(recordName);
  await page.getByRole('button', { name: /Query/i }).click();
  await page.waitForSelector('.ant-table-tbody .ant-table-row-level-0', { state: 'visible' });
};

export const generateRandomName = (name: string): string => {
  return name + Math.round(Math.random() * 10000);
};
