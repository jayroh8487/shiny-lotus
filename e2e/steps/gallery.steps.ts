import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Then('I should see {int} gallery cards', async function (this: CustomWorld, expectedCount: number) {
  const cards = this.page.locator('mat-card');
  await expect(cards).toHaveCount(expectedCount);
});

Then('each gallery card should have a colored background', async function (this: CustomWorld) {
  const backgrounds = this.page.locator('.gallery-image');
  const count = await backgrounds.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const bg = await backgrounds.nth(i).getAttribute('style');
    expect(bg).toBeTruthy();
    expect(bg).toContain('background');
  }
});
