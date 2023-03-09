import { expect, test } from '@playwright/test';
import { getAllAttributes } from 'playwright/common/utils';

const S = {
  menuLink: '.p-menuitem-link',
};

test.describe('Navigation', () => {
  test('Labels and Links', async ({ page }) => {
    await page.goto('/');

    const menuTexts = await page.locator(S.menuLink).allInnerTexts();
    const menuLinks = await getAllAttributes(page.locator(S.menuLink), 'href');

    await expect(menuTexts).toEqual(['Home', 'Todo list', 'Posts', 'Gallery', 'About']);
    await expect(menuLinks).toEqual(['/home', '/todo', '/posts', '/gallery', '/about']);
  });

  test.skip('Todo List', async () => {
    // TODO
  });

  test.skip('Posts', async () => {
    // TODO
  });

  test.skip('Gallery', async () => {
    // TODO
  });

  test.skip('About Us', async () => {
    // TODO
  });
});
