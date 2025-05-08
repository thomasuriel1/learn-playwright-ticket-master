import { test, expect } from '@playwright/test';

test('al entrar al link de Ver todos los conciertos, el enlace funciona', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Ver todos los conciertos' }).click();
});