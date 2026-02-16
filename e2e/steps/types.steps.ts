import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Then('I should see {int} cards on the page', async function (this: CustomWorld, expectedCount: number) {
  const cards = this.page.locator('mat-card');
  await expect(cards).toHaveCount(expectedCount);
});

Then('I should see a card with title {string}', async function (this: CustomWorld, title: string) {
  const cardTitle = this.page.locator('mat-card-title', { hasText: title });
  await expect(cardTitle.first()).toBeVisible();
});

Then('I should see a card with subtitle {string}', async function (this: CustomWorld, subtitle: string) {
  const cardSubtitle = this.page.locator('mat-card-subtitle', { hasText: subtitle });
  await expect(cardSubtitle.first()).toBeVisible();
});

Then('the {string} card should display chips:', async function (this: CustomWorld, cardTitle: string, dataTable: any) {
  const expectedChips = dataTable.hashes().map((row: any) => row.chip);
  const card = this.page.locator('mat-card', { hasText: cardTitle }).first();
  for (const chip of expectedChips) {
    const chipEl = card.locator('mat-chip', { hasText: chip });
    await expect(chipEl).toBeVisible();
  }
});
