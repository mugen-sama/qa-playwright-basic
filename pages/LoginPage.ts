import { Page, Locator, expect} from "@playwright/test";

export class LoginPage {
    
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly inventoryContainer: Locator;
    readonly errorMessage: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.inventoryContainer = page.locator('[data-test="inventory_container"]');
        this.errorMessage = page.locator('[data-test="error"]');
        
    }

    async goToLoginPage() {
        await this.page.goto('https://saucedemo.com/');
    }

    async login(username: string, password: string) {  
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // Positive validation
    async verifySuccessfulLogin() {
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
        await expect(this.inventoryContainer).toBeVisible();
    }

    // Negative validation
    async verifyLoginError() {
        await expect(this.errorMessage).toBeVisible();
    }

    // Optional - to verify specific error message text
    async verifyErrorMessageContains(text: string) {
        await expect(this.errorMessage).toContainText(text);
    }
}