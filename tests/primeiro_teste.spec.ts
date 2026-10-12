import { test, expect } from '@playwright/test';

test('validar se o título e o elemento principal estão visíveis', async ({ page }) => {
  // Navega para uma página qualquer
  await page.goto('https://playwright.dev/');

  // Valida se um elemento está visível na tela 
  const tituloPrincipal = page.locator('h1');
  await expect(tituloPrincipal).toBeVisible();
});