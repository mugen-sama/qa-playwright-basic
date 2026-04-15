import { test } from '../fixtures/baseTest';
import loginData from '../test-data/loginData.json';

test.describe('Login Feature', () => {

  // Positive Test
  test('Login sukses dengan credential valid', async ({ loginPage }) => {
    const validUser = loginData.validUser;
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.verifySuccessfulLogin();
  });

  /// Dynamic Negative Tests
  loginData.invalidUsers.forEach((loginCase) => {

    test(`Login gagal - ${loginCase.name}`, async ({ loginPage }) => {
      await loginPage.login(loginCase.username, loginCase.password);
      await loginPage.verifyLoginErrorMessage(loginCase.error);
    });

  });

});