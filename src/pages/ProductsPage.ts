import { expect, Page } from '@playwright/test';

export class ProductsPage {
  constructor(private readonly page: Page) {}

  private readonly title = '.title';
  private readonly cartButton = '.shopping_cart_link';

  async expectPageLoaded(): Promise<void> {
    await expect(
      this.page.locator(this.title)
    ).toHaveText('Products');
  }

  async addProduct(product: string): Promise<void> {
    await this.page
      .locator(`[data-test="add-to-cart-${product}"]`)
      .click();
  }

  async removeProduct(product: string): Promise<void> {
    await this.page
      .locator(`[data-test="remove-${product}"]`)
      .click();
  }

  async openCart(): Promise<void> {
    await this.page
      .locator(this.cartButton)
      .click();
  }
}