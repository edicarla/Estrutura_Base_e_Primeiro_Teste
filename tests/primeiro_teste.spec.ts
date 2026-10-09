import { test, expect } from '@playwright/test';

test('deve acessar o Google', async ({ page }) => {

  await page.goto('/');

  await expect(
    page.locator('textarea[name="q"]')
  ).toBeVisible();

});