import { expect, test, } from '@playwright/test';

test('test', async ({ page }) => {



// Going to the website
    await page.goto('https://magento.softwaretestingboard.com/');



    //Picking Wares
  await page.getByRole('link', { name: 'New Luma Yoga Collection Get fit and look fab in new seasonal styles Shop New Yoga' }).click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('29').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByTitle('Add to Cart').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('28').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByTitle('Add to Cart').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('29').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('Orange').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByTitle('Add to Cart').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('29').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByTitle('Add to Cart').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('30').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('Gray').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByTitle('Add to Cart').click();
  await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByLabel('28').click();
  await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByTitle('Add to Cart').click();
    await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByTitle('Add to Cart').click();




    //Checking cart
    await page.getByRole('link', { name: ' My Cart 7 7\nitems' }).click();

    //opening more detalis on wares
await page.locator('li:nth-child(1) > div > .product-item-details > div > .toggle > span').click();
await page.locator('li:nth-child(2) > div > .product-item-details > div > .toggle > span').click();
await page.locator('li:nth-child(3) > div > .product-item-details > div > .toggle > span').click();
await page.locator('li:nth-child(4) > div > .product-item-details > div > .toggle > span').click();
await page.locator('li:nth-child(5) > div > .product-item-details > div > .toggle > span').click();
await page.locator('li:nth-child(6) > div > .product-item-details > div > .toggle > span').click();

    await page.pause();
    //checking if colors match the order
    await expect(page.getByRole('link', { name: ' Remove' })).toHaveCount(6);
    await expect(page.locator('#mini-cart').getByText('Blue')).toHaveCount(1);
    await expect(page.locator('#mini-cart').getByText('Gray')).toHaveCount(1);
    await expect(page.locator('#mini-cart').getByText('Green')).toHaveCount(1);
    await expect(page.locator('#mini-cart').getByText('Orange')).toHaveCount(1);
    await expect(page.locator('#mini-cart').getByText('Purple')).toHaveCount(1);
    await expect(page.locator('#mini-cart').getByText('Black')).toHaveCount(1);

    // Finalizing transaction
    await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('johndoe@domain.com');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Grzegorz');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Prządek');
  await page.getByLabel('Company').click();
  await page.getByLabel('Company').fill('Testers.inc');
  await page.getByLabel('Street Address: Line 1').click();
  await page.getByLabel('Street Address: Line 1').fill('kopernika 10');
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('Swarzędz');
  await page.getByText('Sign In Close Sign In Email Address Password Sign In Forgot Your Password? Shipp').click();
  await page.getByLabel('Country').selectOption('PL');
  await page.locator('select[name="region_id"]').selectOption('700');
  await page.getByLabel('Zip/Postal Code').click();
  await page.getByLabel('Zip/Postal Code').fill('62-020');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('123054032');
  await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('1234567890');
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('link', { name: 'Continue Shopping' }).click();
});
