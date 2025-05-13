import { test, expect } from '@playwright/test';

test('muestra "Parque Centenario" en pantalla', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const recital = await page.getByText('Parque Centenario');
  await expect(recital).toBeVisible();
});
