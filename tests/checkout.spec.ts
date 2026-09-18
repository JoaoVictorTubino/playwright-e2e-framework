import { test } from '../src/fixtures/pages.fixture';

import { users } from '../src/data/testData';

import { generateCustomer } from '../src/utils/dataGenerator';

test.describe('Checkout', () => {

  test('CHECKOUT-001 - realizar compra de dois produtos com sucesso', async ({
    loginPage,
    productsPage,
    cartPage,
    checkoutPage,
  }) => {

    const customer = generateCustomer();

    const products = [
      {
        id: 'sauce-labs-backpack',
        name: 'Sauce Labs Backpack',
      },
      {
        id: 'sauce-labs-bike-light',
        name: 'Sauce Labs Bike Light',
      },
    ];

    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.expectPageLoaded();

    for (const product of products) {
      await productsPage.addProduct(product.id);
    }

    await productsPage.openCart();

    await cartPage.expectProductsInCart(
      products.map(product => product.name)
    );

    await cartPage.checkout();

    await checkoutPage.expectCheckoutPageLoaded();

    await checkoutPage.fillCustomerData(customer);

    await checkoutPage.continue();

    await checkoutPage.finish();

    await checkoutPage.expectOrderCompleted();
  });

  test('CHECKOUT-002 - impedir checkout sem nome', async ({
    loginPage,
    productsPage,
    cartPage,
    checkoutPage,
  }) => {

    const customer = generateCustomer();

    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.addProduct(
      'sauce-labs-backpack'
    );

    await productsPage.openCart();

    await cartPage.checkout();

    await checkoutPage.expectCheckoutPageLoaded();

    await checkoutPage.fillCustomerData({
      firstName: '',
      lastName: customer.lastName,
      postalCode: customer.postalCode,
    });

    await checkoutPage.continue();

    await checkoutPage.expectCheckoutError();
  });

  test('CHECKOUT-003 - realizar compra com três produtos', async ({
    loginPage,
    productsPage,
    cartPage,
    checkoutPage,
  }) => {

    const customer = generateCustomer();

    const products = [
      {
        id: 'sauce-labs-backpack',
        name: 'Sauce Labs Backpack',
      },
      {
        id: 'sauce-labs-bike-light',
        name: 'Sauce Labs Bike Light',
      },
      {
        id: 'sauce-labs-bolt-t-shirt',
        name: 'Sauce Labs Bolt T-Shirt',
      },
    ];

    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.expectPageLoaded();

    for (const product of products) {
      await productsPage.addProduct(product.id);
    }

    await productsPage.openCart();

    await cartPage.expectProductsInCart(
      products.map(product => product.name)
    );

    await cartPage.checkout();

    await checkoutPage.expectCheckoutPageLoaded();

    await checkoutPage.fillCustomerData(customer);

    await checkoutPage.continue();

    await checkoutPage.finish();

    await checkoutPage.expectOrderCompleted();
  });

});