import { test, expect } from '@playwright/test';

test('muestra un recital en la pantalla', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Busca un recital cargado por globalSetup
  const recital = await page.getByText('Teatro Gran Rex');
  await expect(recital).toBeVisible();
});
