import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  private readonly cartItems = '[data-test="inventory-item"]';
  private readonly checkoutButton = '[data-test="checkout"]';

  async expectProductInCart(productName: string): Promise<void> {
    await expect(
      this.page
        .locator(this.cartItems)
        .filter({
          hasText: productName,
        })
    ).toBeVisible();
  }

  async expectProductsInCart(products: string[]): Promise<void> {
    for (const product of products) {
      await this.expectProductInCart(product);
    }
  }

  async removeProduct(product: string): Promise<void> {
    await this.page
      .locator(`[data-test="remove-${product}"]`)
      .click();
  }

  async checkout(): Promise<void> {
    await this.page
      .locator(this.checkoutButton)
      .click();
  }
}