import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly productsTitle: Locator;
    readonly errorMessage: Locator;
    readonly baseUrl = 'https://www.saucedemo.com/';


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.productsTitle = page.getByText('Products');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goToLoginPage() {
        await this.page.goto(this.baseUrl);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // Positive validation
    async verifySuccessfulLogin() {
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.productsTitle).toBeVisible();
    }

    // Negative validation
    async verifyLoginError() {
        await expect(this.errorMessage).toBeVisible();
    }

    // Optional - to verify specific error message text
    async verifyLoginErrorMessage(text: string) {
        await expect(this.errorMessage).toContainText(text);
    }
}