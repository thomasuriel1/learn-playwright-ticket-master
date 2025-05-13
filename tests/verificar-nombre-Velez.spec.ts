import { test, expect } from '@playwright/test';

test('muestra "Estadio Vélez" en pantalla', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const recital = await page.getByText('Estadio Vélez');
  await expect(recital).toBeVisible();
});
