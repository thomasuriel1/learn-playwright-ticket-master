import { test, expect } from '@playwright/test';

test('se espera que al seleccionar un evento y elegir dos entradas se sume el precio', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button').nth(1).click();
  await expect(page.getByText('$85.99')).toBeVisible();
  await expect(page.getByText('$171.98')).toBeVisible();
});