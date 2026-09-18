import { test } from '../src/fixtures/pages.fixture';

import { users } from '../src/data/testData';

test.describe('Produtos', () => {

  test.beforeEach(async ({
    loginPage,
    productsPage,
  }) => {
    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.expectPageLoaded();
  });

  test('PRODUCT-001 - visualizar produtos', async ({
    productsPage,
  }) => {
    await productsPage.expectPageLoaded();
  });

  test('PRODUCT-002 - adicionar produto ao carrinho', async ({
    productsPage,
  }) => {
    await productsPage.addProduct(
      'sauce-labs-backpack'
    );
  });

  test('PRODUCT-003 - adicionar produto e acessar carrinho', async ({
    productsPage,
    cartPage,
  }) => {
    await productsPage.addProduct(
      'sauce-labs-backpack'
    );

    await productsPage.openCart();

    await cartPage.expectProductInCart(
      'Sauce Labs Backpack'
    );
  });

  test('PRODUCT-004 - adicionar diferentes produtos ao carrinho', async ({
    productsPage,
    cartPage,
  }) => {
    await productsPage.addProduct(
      'sauce-labs-backpack'
    );

    await productsPage.addProduct(
      'sauce-labs-bike-light'
    );

    await productsPage.openCart();

    await cartPage.expectProductsInCart([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
    ]);
  });

});