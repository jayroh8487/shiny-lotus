import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Then('I should see {int} expansion panels', async function (this: CustomWorld, expectedCount: number) {
  const panels = this.page.locator('mat-expansion-panel');
  await expect(panels).toHaveCount(expectedCount);
});

When('I click the FAQ {string}', async function (this: CustomWorld, question: string) {
  const panelHeader = this.page.locator('mat-expansion-panel-header', { hasText: question });
  await panelHeader.click();
  await this.page.waitForTimeout(500);
});

Then('I should see the answer containing {string}', async function (this: CustomWorld, answerText: string) {
  const expandedContent = this.page.locator('mat-expansion-panel .mat-expansion-panel-body, mat-expansion-panel p');
  const allText = await expandedContent.allTextContents();
  const combinedText = allText.join(' ');
  expect(combinedText).toContain(answerText);
});
