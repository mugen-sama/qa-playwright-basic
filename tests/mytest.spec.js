import { test, expect } from '@playwright/test';

test('My First Test', async ({ page }) => {

    await page.goto('https://google.com/ncr');

    // Handle cookie pop-up
    const acceptButton = page.locator('button:has-text("I agree")');
    if (await acceptButton.isVisible()) {
        await acceptButton.click();
        console.log('Cookie pop-up accepted.');
    }

    // Input search
    await page.locator('textarea[name="q"]').fill('Playwright');

    // 🔥 FIX DI SINI (Promise.all)
    await Promise.all([
        page.waitForNavigation(),
        page.keyboard.press('Enter'),
    ]);

    // Ambil hasil
    const results = page.locator('h3');

    // Assertion (lebih clean)  
    await expect(results.first()).toBeVisible();


});