import { expect, test } from '@playwright/test';

test('Home', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Todolist');
  await expect(page).toHaveURL('/home');
  await expect(page.locator('[data-cy="title"]')).toContainText('welcome!');
});
