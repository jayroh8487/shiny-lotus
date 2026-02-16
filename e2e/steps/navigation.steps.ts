import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('the app is running', async function (this: CustomWorld) {
  await this.page.goto(this.baseUrl, { waitUntil: 'networkidle' });
});

When('I navigate to the root URL', async function (this: CustomWorld) {
  await this.page.goto(this.baseUrl, { waitUntil: 'networkidle' });
});

When('I navigate to the {string} page', async function (this: CustomWorld, route: string) {
  await this.page.goto(`${this.baseUrl}/${route}`, { waitUntil: 'networkidle' });
});

When('I navigate to an unknown route', async function (this: CustomWorld) {
  await this.page.goto(`${this.baseUrl}/nonexistent-page`, { waitUntil: 'networkidle' });
});

When('I click the {string} navigation item', async function (this: CustomWorld, label: string) {
  const navItem = this.page.locator('mat-nav-list a', { hasText: label });
  await navItem.click();
  await this.page.waitForLoadState('networkidle');
});

When('I click the logo header', async function (this: CustomWorld) {
  await this.page.locator('.sidenav-header').click();
  await this.page.waitForLoadState('networkidle');
});

Then('I should be on the {string} page', async function (this: CustomWorld, route: string) {
  await expect(this.page).toHaveURL(new RegExp(`/${route}`));
});

Then('I should see the page title {string}', async function (this: CustomWorld, title: string) {
  const heading = this.page.locator('h1');
  await expect(heading).toHaveText(title);
});

Then('I should see the page description {string}', async function (this: CustomWorld, description: string) {
  const desc = this.page.locator('.page-description');
  await expect(desc).toHaveText(description);
});

Then('the sidenav should display the following items:', async function (this: CustomWorld, dataTable: any) {
  const expectedLabels = dataTable.hashes().map((row: any) => row.label);
  for (const label of expectedLabels) {
    const navItem = this.page.locator('mat-nav-list a', { hasText: label });
    await expect(navItem).toBeVisible();
  }
});

Then('the toolbar should display {string}', async function (this: CustomWorld, text: string) {
  const toolbar = this.page.locator('mat-toolbar');
  await expect(toolbar).toContainText(text);
});

Then('the {string} navigation item should be active', async function (this: CustomWorld, label: string) {
  const navItem = this.page.locator('mat-nav-list a', { hasText: label });
  await expect(navItem).toHaveClass(/active-link/);
});

Then('the page should contain the text {string}', async function (this: CustomWorld, text: string) {
  const content = this.page.locator('main');
  await expect(content).toContainText(text);
});
