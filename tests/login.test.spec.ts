import { test } from '../fixtures/baseTest';

test.describe('Login Feature', () => {

  // ✅ Positive Test
  test('Login sukses dengan credential valid', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifySuccessfulLogin();
  });

  // ❌ 1. Username kosong
  test('Login gagal - username kosong', async ({ loginPage }) => {
    await loginPage.login('', 'secret_sauce');
    await loginPage.verifyLoginErrorMessage('Epic sadface: Username is required');
  });

  // ❌ 2. Password kosong
  test('Login gagal - password kosong', async ({ loginPage }) => {
    await loginPage.login('standard_user', '');
    await loginPage.verifyLoginErrorMessage('Epic sadface: Password is required');
  });

  // ❌ 3. Username & Password salah
  test('Login gagal - credential tidak valid', async ({ loginPage }) => {
    await loginPage.login('wrong_user', 'wrong_password'); 
    await loginPage.verifyLoginErrorMessage(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});