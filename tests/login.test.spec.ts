import { test } from '../fixtures/baseTest';
import loginData from '../test-data/loginData.json';

test.describe('Login Feature', () => {

  // ✅ Positive Test
  test('Login sukses dengan credential valid', async ({ loginPage }) => {
    const validUser = loginData.validUser;
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.verifySuccessfulLogin();
  });

  // ❌ 1. Username kosong
  test('Login gagal - username kosong', async ({ loginPage }) => {
    const emptyUsername = loginData.emptyUsername;
    await loginPage.login(emptyUsername.username, emptyUsername.password);
    await loginPage.verifyLoginErrorMessage(emptyUsername.error);
  });

  // ❌ 2. Password kosong
  test('Login gagal - password kosong', async ({ loginPage }) => {
    const emptyPassword = loginData.emptyPassword;
    await loginPage.login(emptyPassword.username, emptyPassword.password);
    await loginPage.verifyLoginErrorMessage(emptyPassword.error);
  });

  // ❌ 3. Username & Password salah
  test('Login gagal - credential tidak valid', async ({ loginPage }) => {
    const invalidUser = loginData.invalidUser;
    await loginPage.login(invalidUser.username, invalidUser.password);
    await loginPage.verifyLoginErrorMessage(invalidUser.error);
  });
});