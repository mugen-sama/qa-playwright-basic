import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Extend Playwright test dengan custom fixture untuk LoginPage
export const test = base.extend<{
  loginPage: LoginPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
     //  // Auto buka halaman login sebelum test jalan
    await loginPage.goToLoginPage();
    // Inject ke test sehingga bisa dipakai di test tanpa harus buat instance lagi
    await use(loginPage);
  },
});