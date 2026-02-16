import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Then('the price table should have the following columns:', async function (this: CustomWorld, dataTable: any) {
  const expectedColumns = dataTable.hashes().map((row: any) => row.column);
  const headers = this.page.locator('table th');
  const count = await headers.count();
  const actualColumns: string[] = [];
  for (let i = 0; i < count; i++) {
    actualColumns.push((await headers.nth(i).textContent() || '').trim());
  }
  for (const col of expectedColumns) {
    expect(actualColumns).toContain(col);
  }
});

Then('the price table should contain {int} rows', async function (this: CustomWorld, expectedCount: number) {
  const rows = this.page.locator('table tbody tr');
  await expect(rows).toHaveCount(expectedCount);
});

Then('the price table should contain the following varieties:', async function (this: CustomWorld, dataTable: any) {
  const expectedVarieties = dataTable.hashes().map((row: any) => row.variety);
  for (const variety of expectedVarieties) {
    const cell = this.page.locator('table tbody tr td', { hasText: variety });
    await expect(cell.first()).toBeVisible();
  }
});
