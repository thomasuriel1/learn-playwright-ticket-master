import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).fill('uriel');
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).click();
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).fill('2132132132132132');
  await page.getByRole('combobox', { name: 'Mes' }).click();
  await page.getByRole('option', { name: '04' }).click();
  await page.getByRole('combobox', { name: 'Año' }).click();
  await page.getByRole('option', { name: '2025' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).fill('123');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('tlauravargas@gmail.com');
  await page.getByRole('button', { name: 'Completar compra' }).click();
});