import { test } from '../src/fixtures/pages.fixture';

import { users } from '../src/data/testData';

test.describe('Carrinho', () => {

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

  test('CART-001 - validar produto no carrinho', async ({
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

  test('CART-002 - acessar checkout', async ({
    productsPage,
    cartPage,
    checkoutPage,
  }) => {
    await productsPage.addProduct(
      'sauce-labs-backpack'
    );

    await productsPage.openCart();

    await cartPage.checkout();

    await checkoutPage.expectCheckoutPageLoaded();
  });

  test('CART-003 - adicionar dois produtos e validar carrinho', async ({
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