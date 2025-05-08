import { test, expect } from '@playwright/test';

test('cuando entras a un evento se espera poder volver para atras', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$65\.50Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('link', { name: 'Ticket Master' }).click();
});