import { test, expect } from '@playwright/test';

test('muestra "Niceto Club" en pantalla', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const recital = await page.getByText('Niceto Club');
  await expect(recital).toBeVisible();
});
