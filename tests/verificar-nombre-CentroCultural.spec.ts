import { test, expect } from '@playwright/test';

test('muestra "Centro Cultural Kirchner" en pantalla', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const recital = await page.getByText('Centro Cultural Kirchner');
  await expect(recital).toBeVisible();
});
