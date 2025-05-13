import { test, expect } from '@playwright/test';

test('muestra "Movistar Arena" en pantalla', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const recital = await page.getByText('Movistar Arena');
  await expect(recital).toBeVisible();
});
