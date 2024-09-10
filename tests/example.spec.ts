import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // await expect(page.getByText("Any browser • Any platform • One API")).toBeVisible();
//   await expect(page.getByText("Hatsune Miku")).toBeVisible();

// });


test('has title', async({ page }) => {
  await page.goto("https://a.co/d/2RSK1H2");

  const title = "OFFICIAL Hatsune Miku Enamel Collector Pin | Features Lovable Japanese Pop Icon | Perfect Accessory for Backpacks, Camera Bags, Hats, & More!"
  // await expect(page.getByTestId("productTitle")).toHaveText(title);

  await expect(page.getByTestId("title")).toHaveText(title);
  }
  //amazon product choice "https://a.co/d/2RSK1H2"
  //amazon product title OFFICIAL Hatsune Miku Enamel Collector Pin | Features Lovable Japanese Pop Icon | Perfect Accessory for Backpacks, Camera Bags, Hats, & More!

  // id for product title locator (productTitle)

  // getByTestId
)