import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // await expect(page.getByText("Any browser • Any platform • One API")).toBeVisible();
  await expect(page.getByText("Hatsune Miku")).toBeVisible();

});