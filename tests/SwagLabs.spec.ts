import { expect, test, } from '@playwright/test';

test('test', async ({ page }) => {




    await page.goto('https://www.saucedemo.com/');


  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible
    await expect(page).toHaveURL('https://www.saucedemo.com')

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')


  await page.locator('div').filter({ hasText: /^Open Menu$/ }).nth(1).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('performance_glitch_user');

  await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();


    await page.waitForTimeout(4000);

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await page.locator('[data-test="product_sort_container"]').selectOption({ label: 'Name (Z to A)' });
    await page.locator('[data-test="product_sort_container"]').selectOption({ label: 'Price (low to high)' });
    await page.locator('[data-test="product_sort_container"]').selectOption({ label: 'Price (high to low)' });
    await page.locator('[data-test="product_sort_container"]').selectOption({ label: 'Name (A to Z)' });

    await expect(page.locator('.inventory_item_description')).toHaveCount(6);




  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    await page.locator('a').filter({ hasText: '6' }).click();


await expect(page.locator('text=Remove')).toHaveCount(6)





await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    await expect(page.locator('text=Remove')).toHaveCount(0)


  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await page.locator('a').filter({ hasText: '6' }).click();

    await page.locator('[data-test="checkout"]').click();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')

  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Janusz');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Piwko');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('62-020');
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    await page.close();
});
