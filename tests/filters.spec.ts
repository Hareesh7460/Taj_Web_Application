// import { test, expect } from '@playwright/test';

// test("TataCliq Men's Fashion filter by 3PIN", async ({ page }) => {
//   // Step 1: Navigate and wait for full load
//   await page.goto('https://www.tatacliq.com/', { waitUntil: 'domcontentloaded' });
//   await page.waitForLoadState('load',{timeout:10000});

//   // Step 2: Handle notification popup if present
//   const notification = page.getByRole('button', { name: 'No, Thanks' });
//  /* if (await notification.isVisible().catch(() => false)) {
//   await notification.waitFor({ state: 'visible' });
//   await notification.click({ timeout: 5000 });
// }*/
//   await notification.waitFor({ state: 'visible', timeout: 5000 });
//    await notification.click();

//   // Step 3: Hover on "Categories" menu
//   const categoriesMenu = page.getByRole('button', { name: /Categories/i });
//   await categoriesMenu.hover();
//   //await categoriesMenu.click(); // Sometimes hover is not enough, click to open

//   // Step 4: Click on "Men's Fashion" in dropdown
//   const mensFashion = page.locator('//div[@aria-label="Men\'s Fashion button, Press right arrow or Enter to expand"]');
  
//   await mensFashion.click({ force: true });
//   await page.waitForLoadState('load');

//   // Step 5: Validate navigation to Men's PLP
//   await expect(page).toHaveURL(/mens-clothing/);

//   // Step 6: Scroll to Brand filter section
//   const brandFilter = page.locator("//div[@class='Accordion__headText' and text()='Brand']");
//   await brandFilter.scrollIntoViewIfNeeded({ timeout: 5000 });

//   // Step 7: Expand Brand filter
//     await brandFilter.click();
  
//   // Step 8: Select the brand "3PIN"
//   let brand3PIN;
//   try {
//     brand3PIN = page.getByRole('radio', { name: /3PIN/i });
//     await brand3PIN.scrollIntoViewIfNeeded();
//     await brand3PIN.click();
//   } catch {
//     // Fallback: try by text or label
//     brand3PIN = page.getByLabel('3PIN', { exact: false });
//     await brand3PIN.scrollIntoViewIfNeeded();
//     await brand3PIN.click();
//   }
//   await page.waitForLoadState('load',{timeout:10000});
//   // Step 9: Ensure filter is applied (wait for filter chip or product update)
//  const text = await page.locator("//div[@class='Plp__totalProducts']").textContent();

// // text = "222130 Products"
// await page.waitForTimeout(2000)

// const count = parseInt(text!.replace(/\D/g, "")); 
// // removes non-numbers → 222130

// expect(count).toBeGreaterThan(1);


// });
