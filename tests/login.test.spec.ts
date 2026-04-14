import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Feature', () => {

  // ✅ Positive Test
  test('Login sukses dengan credential valid', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifySuccessfulLogin();
  });

  // ❌ 1. Username kosong
  test('Login gagal - username kosong', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login('', 'secret_sauce');
    
    await loginPage.verifyLoginError();
    await loginPage.verifyErrorMessageContains('Epic sadface: Username is required');
  });

  // ❌ 2. Password kosong
  test('Login gagal - password kosong', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login('standard_user', '');
    
    await loginPage.verifyLoginError();
    await loginPage.verifyErrorMessageContains('Epic sadface: Password is required');
  });

  // ❌ 3. Username & Password salah
  test('Login gagal - credential tidak valid', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login('wrong_user', 'wrong_password');
    
    await loginPage.verifyLoginError();
    await loginPage.verifyErrorMessageContains(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

});