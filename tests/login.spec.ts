import { test } from '../src/fixtures/pages.fixture';

import { users } from '../src/data/testData';

test.describe('Login', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('LOGIN-001 - realizar login com usuário válido', async ({
    loginPage,
    productsPage,
  }) => {
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.expectPageLoaded();
  });

  test('LOGIN-002 - impedir login de usuário bloqueado', async ({
    loginPage,
  }) => {
    await loginPage.login(
      users.locked.username,
      users.locked.password
    );

    await loginPage.expectLoginError();
  });

  test('LOGIN-003 - impedir login com credenciais inválidas', async ({
    loginPage,
  }) => {
    await loginPage.login(
      users.invalid.username,
      users.invalid.password
    );

    await loginPage.expectLoginError();
  });

});