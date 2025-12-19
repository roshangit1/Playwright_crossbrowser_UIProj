import { test, expect } from '@playwright/test';

// Run before each test
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('homepage has Playwright in title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link navigates to intro page', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
});

test('search bar works', async ({ page }) => {
  await page.locator('.DocSearch-Button-Placeholder').click()
  
  await page.locator('#docsearch-input').fill('dropdown');
  await page.waitForTimeout(2000); // waits 2 seconds
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/docs/writing-tests#basic-actions');
});

test('docs sidebar is visible', async ({ page }) => {
  await expect(page.locator('[class="theme-layout-navbar-left navbar__items"]')).toBeVisible();
});