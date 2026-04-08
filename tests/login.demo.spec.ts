import { test, expect, Locator } from '@playwright/test';

test('Login Test', async ({ page }) => {
  await page.goto('https://saucedemo.com/');

    // Define locators
    const usernameInput: Locator = page.locator('#user-name');
    const passwordInput: Locator = page.locator('#password');
    const loginButton: Locator = page.locator('#login-button');


})