import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  private readonly usernameInput = '#user-name';
  private readonly passwordInput = '#password';
  private readonly loginButton = '#login-button';
  private readonly errorMessage = '[data-test="error"]';

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async expectLoginError(): Promise<void> {
    await expect(
      this.page.locator(this.errorMessage)
    ).toBeVisible();
  }
}