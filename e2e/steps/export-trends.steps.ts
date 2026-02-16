import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Then('the export trends table should contain {int} rows', async function (this: CustomWorld, expectedCount: number) {
  const rows = this.page.locator('table tbody tr');
  await expect(rows).toHaveCount(expectedCount);
});
