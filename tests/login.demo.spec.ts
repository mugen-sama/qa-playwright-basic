import { test, expect, Locator } from '@playwright/test';

test('Login Test', async ({ page }) => {
  await page.goto('https://saucedemo.com/');

    // Define locators
    const usernameInput: Locator = page.locator('#user-name');
    const passwordInput: Locator = page.locator('#password');
    const loginButton: Locator = page.locator('#login-button');

    // Perform login
    await usernameInput.fill('standard_user');
    await passwordInput.fill('secret_sauce');
    await loginButton.click();  

    // Verify successful login by checking for the presence of the inventory container
    // const inventoryContainer: Locator = page.locator('.inventory_container');
    // const inventoryContainer = page.locator('[data-test="inventory_container"]');
    // await expect(inventoryContainer).toBeVisible(); 
    // await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(
      page.locator('[data-test="title"]')
    ).toHaveText('Products');

  // loginButton.pressKey('Enter');

})