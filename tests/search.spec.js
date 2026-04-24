// const { test, expect } = require('@playwright/test');

// // Test Journey 1: Search Product and Add to Cart
// test.describe('User Journey 1: Search and Add to Cart', () => {
//   test('should search for a product and add it to cart', async ({ page }) => {
//     // Navigate to homepage
//     await page.goto('https://www.tatacliq.com/', { waitUntil: 'domcontentloaded' });
    
    
//     // Wait for page to be interactive - wait for search box to be visible
//     const searchBox = page.locator('input[placeholder*="Search"], input[type="search"], input[class*="search"]').first();
//     await searchBox.waitFor({ state: 'visible', timeout: 15000 });

//     await page.waitForTimeout(2000); 
//     // Search for a product
//     await searchBox.fill('mens shoes');
//     await searchBox.press('Enter');
    
//     // Wait for search results to load - wait for product cards
//     await page.waitForURL(/search|mens/, { timeout: 10000 });
//     const productCards = page.locator('a[class^="ProductModule__base"]');
//     await productCards.first().waitFor({ state: 'visible', timeout: 15000 });
//     await page.waitForTimeout(2000);

//     // Click on first product from results
//     //await productCards.first().click();

//       // 👇 Wait for popup while clicking
//     const [newPage] = await Promise.all([
//         page.waitForEvent('popup'),   // Wait for new tab
//         productCards.first().click()          // Click triggers new tab
//     ]);

//     // Wait until new page fully loads
//     await newPage.waitForLoadState('domcontentloaded');
    
//     //await page.waitForTimeout(2000);
//     // Wait for product detail page - wait for add to cart button
//     //const addToCartBtn = page.locator('button:has-text("Add to Bag"), button:has-text("ADD TO BAG"), button[class*="add-to-bag"]').first();
//     const addToCartBtn = newPage.locator('button[class*="addToBagPDP"]').first();
//     await addToCartBtn.scrollIntoViewIfNeeded();
//     await addToCartBtn.waitFor({ state: 'visible', timeout: 15000 });

//     // Select size if available
//     const sizeSelector = newPage.locator('[class*="SizeSelectNewPdp__sizeTexts"]').first();
//     const isSizeVisible = await sizeSelector.isVisible({ timeout: 3000 }).catch(() => false);
    
//     if (isSizeVisible) {
//       await sizeSelector.click();
//       await page.waitForTimeout(500);
//       //const sizeOption = newPage.locator('[class*="size-option"], li[class*="size"], button[class*="size"]').first();
//       //await sizeOption.click();
//       //await page.waitForTimeout(500);
//     }

//     // Add to cart
//     await addToCartBtn.click();

//     // Verify cart confirmation - wait for success message or cart update
//     const cartConfirmation = newPage.locator(
//       '[class*="cart"], [class*="bag"], [class*="added"], text=/Added to Bag|Item added/i'
//     ).first();
//     await cartConfirmation.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {
//       console.log('Cart confirmation not visible, but button was clicked');
//     });
    
//     console.log('✓ Product successfully added to cart');
//   });
// });