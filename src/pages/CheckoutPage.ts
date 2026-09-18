import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  private readonly title = '.title';

  private readonly firstNameInput = '[data-test="firstName"]';
  private readonly lastNameInput = '[data-test="lastName"]';
  private readonly postalCodeInput = '[data-test="postalCode"]';

  private readonly continueButton = '[data-test="continue"]';
  private readonly finishButton = '[data-test="finish"]';

  private readonly successMessage = '[data-test="complete-header"]';
  private readonly errorMessage = '[data-test="error"]';

  async expectCheckoutPageLoaded(): Promise<void> {
    await expect(
      this.page.locator(this.title)
    ).toHaveText('Checkout: Your Information');
  }

  async fillCustomerData(customer: {
    firstName: string;
    lastName: string;
    postalCode: string;
  }): Promise<void> {
    await this.page
      .locator(this.firstNameInput)
      .fill(customer.firstName);

    await this.page
      .locator(this.lastNameInput)
      .fill(customer.lastName);

    await this.page
      .locator(this.postalCodeInput)
      .fill(customer.postalCode);
  }

  async continue(): Promise<void> {
    await this.page
      .locator(this.continueButton)
      .click();
  }

  async finish(): Promise<void> {
    await this.page
      .locator(this.finishButton)
      .click();
  }

  async expectOrderCompleted(): Promise<void> {
    await expect(
      this.page.locator(this.successMessage)
    ).toHaveText('Thank you for your order!');
  }

  async expectCheckoutError(): Promise<void> {
    await expect(
      this.page.locator(this.errorMessage)
    ).toBeVisible();
  }
}