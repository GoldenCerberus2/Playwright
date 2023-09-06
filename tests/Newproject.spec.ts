import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {





    await page.goto('https://magento.softwaretestingboard.com/');


    // test linków na stronie głównej
  await page.getByRole('link', { name: 'New Luma Yoga Collection Get fit and look fab in new seasonal styles Shop New Yoga' }).click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: '20% OFF Luma pants when you shop today* Shop Pants ' }).click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Even more ways to mix and match Buy 3 Luma tees get a 4th free Shop Tees ' }).click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Take it from Erin Luma founder Erin Renny shares her favorites! Shop Erin Recommends ' }).click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Science meets performance Wicking to raingear, Luma covers you Shop Performance ' }).click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Twice around, twice as nice Find conscientious, comfy clothing in our eco-friendly collection Shop Eco-Friendly ' }).click();
  await page.getByLabel('store logo').click();
  await page.getByRole('heading', { name: 'Hot Sellers' }).click();
  await page.getByRole('link', { name: 'Radiant Tee' }).first().click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Breathe-Easy Tank' }).first().click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Argus All-Weather Tank' }).first().click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Hero Hoodie' }).first().click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Fusion Backpack' }).first().click();
  await page.getByLabel('store logo').click();
  await page.getByRole('link', { name: 'Push It Messenger Bag' }).first().click();
    await page.getByLabel('store logo').click();



// pełny test przedmiotów z kolekcji yoga
  await page.getByRole('link', { name: 'New Luma Yoga Collection Get fit and look fab in new seasonal styles Shop New Yoga' }).click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('28').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('29').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Echo Fit Compression Short Rating: 67% 3 Reviews As low as $24.00 2829 Add to Ca' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('28').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('29').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('30').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('31').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('Gray').click();
  await page.locator('li').filter({ hasText: 'Gwen Drawstring Bike Short Rating: 90% 2 Reviews As low as $50.00 2829303132 Add' }).getByLabel('Orange').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('28').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('29').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('30').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('31').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Fiona Fitness Short Rating: 60% 3 Reviews As low as $29.00 2829303132 Add to Car' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByLabel('28').click();
  await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByLabel('29').click();
  await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Ida Workout Parachute Pant Rating: 67% 3 Reviews As low as $48.00 2829 Add to Ca' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Nora Practice Tank As low as $39.00 XSSMLXL Add to Cart Add to Wish List Add to ' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Nora Practice Tank As low as $39.00 XSSMLXL Add to Cart Add to Wish List Add to ' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Nora Practice Tank As low as $39.00 XSSMLXL Add to Cart Add to Wish List Add to ' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Nora Practice Tank As low as $39.00 XSSMLXL Add to Cart Add to Wish List Add to ' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Nora Practice Tank As low as $39.00 XSSMLXL Add to Cart Add to Wish List Add to ' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Nora Practice Tank As low as $39.00 XSSMLXL Add to Cart Add to Wish List Add to ' }).getByLabel('Orange').click();
  await page.locator('li').filter({ hasText: 'Nora Practice Tank As low as $39.00 XSSMLXL Add to Cart Add to Wish List Add to ' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Nora Practice Tank As low as $39.00 XSSMLXL Add to Cart Add to Wish List Add to ' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Celeste Sports Bra Rating: 67% 3 Reviews As low as $39.00 XSSMLXL Add to Cart Ad' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Celeste Sports Bra Rating: 67% 3 Reviews As low as $39.00 XSSMLXL Add to Cart Ad' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Celeste Sports Bra Rating: 67% 3 Reviews As low as $39.00 XSSMLXL Add to Cart Ad' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Celeste Sports Bra Rating: 67% 3 Reviews As low as $39.00 XSSMLXL Add to Cart Ad' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Celeste Sports Bra Rating: 67% 3 Reviews As low as $39.00 XSSMLXL Add to Cart Ad' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Celeste Sports Bra Rating: 67% 3 Reviews As low as $39.00 XSSMLXL Add to Cart Ad' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Celeste Sports Bra Rating: 67% 3 Reviews As low as $39.00 XSSMLXL Add to Cart Ad' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Celeste Sports Bra Rating: 67% 3 Reviews As low as $39.00 XSSMLXL Add to Cart Ad' }).getByLabel('Yellow').click();
  await page.locator('li').filter({ hasText: 'Juliana Short-Sleeve Tee Rating: 60% 2 Reviews As low as $42.00 XSSMLXL Add to C' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Juliana Short-Sleeve Tee Rating: 60% 2 Reviews As low as $42.00 XSSMLXL Add to C' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Juliana Short-Sleeve Tee Rating: 60% 2 Reviews As low as $42.00 XSSMLXL Add to C' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Juliana Short-Sleeve Tee Rating: 60% 2 Reviews As low as $42.00 XSSMLXL Add to C' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Juliana Short-Sleeve Tee Rating: 60% 2 Reviews As low as $42.00 XSSMLXL Add to C' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Juliana Short-Sleeve Tee Rating: 60% 2 Reviews As low as $42.00 XSSMLXL Add to C' }).getByLabel('Black').click();
  await page.getByRole('option', { name: 'White' }).click();
  await page.locator('li').filter({ hasText: 'Juliana Short-Sleeve Tee Rating: 60% 2 Reviews As low as $42.00 XSSMLXL Add to C' }).getByLabel('Yellow').click();
  await page.locator('li').filter({ hasText: 'Elisa EverCool™ Tee As low as $29.00 XSSMLXL Add to Cart Add to Wish List Add to' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Elisa EverCool™ Tee As low as $29.00 XSSMLXL Add to Cart Add to Wish List Add to' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Elisa EverCool™ Tee As low as $29.00 XSSMLXL Add to Cart Add to Wish List Add to' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Elisa EverCool™ Tee As low as $29.00 XSSMLXL Add to Cart Add to Wish List Add to' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Elisa EverCool™ Tee As low as $29.00 XSSMLXL Add to Cart Add to Wish List Add to' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Elisa EverCool™ Tee As low as $29.00 XSSMLXL Add to Cart Add to Wish List Add to' }).getByLabel('Gray').click();
  await page.locator('li').filter({ hasText: 'Elisa EverCool™ Tee As low as $29.00 XSSMLXL Add to Cart Add to Wish List Add to' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Elisa EverCool™ Tee As low as $29.00 XSSMLXL Add to Cart Add to Wish List Add to' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Layla Tee Rating: 60% 2 Reviews As low as $29.00 XSSMLXL Add to Cart Add to Wish' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Layla Tee Rating: 60% 2 Reviews As low as $29.00 XSSMLXL Add to Cart Add to Wish' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Layla Tee Rating: 60% 2 Reviews As low as $29.00 XSSMLXL Add to Cart Add to Wish' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Layla Tee Rating: 60% 2 Reviews As low as $29.00 XSSMLXL Add to Cart Add to Wish' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Layla Tee Rating: 60% 2 Reviews As low as $29.00 XSSMLXL Add to Cart Add to Wish' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Layla Tee Rating: 60% 2 Reviews As low as $29.00 XSSMLXL Add to Cart Add to Wish' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Layla Tee Rating: 60% 2 Reviews As low as $29.00 XSSMLXL Add to Cart Add to Wish' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Layla Tee Rating: 60% 2 Reviews As low as $29.00 XSSMLXL Add to Cart Add to Wish' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Gabrielle Micro Sleeve Top Rating: 73% 3 Reviews As low as $28.00 XSSMLXL Add to' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Gabrielle Micro Sleeve Top Rating: 73% 3 Reviews As low as $28.00 XSSMLXL Add to' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Gabrielle Micro Sleeve Top Rating: 73% 3 Reviews As low as $28.00 XSSMLXL Add to' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Gabrielle Micro Sleeve Top Rating: 73% 3 Reviews As low as $28.00 XSSMLXL Add to' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Gabrielle Micro Sleeve Top Rating: 73% 3 Reviews As low as $28.00 XSSMLXL Add to' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Gabrielle Micro Sleeve Top Rating: 73% 3 Reviews As low as $28.00 XSSMLXL Add to' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Gabrielle Micro Sleeve Top Rating: 73% 3 Reviews As low as $28.00 XSSMLXL Add to' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Gabrielle Micro Sleeve Top Rating: 73% 3 Reviews As low as $28.00 XSSMLXL Add to' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Neve Studio Dance Jacket Rating: 87% 3 Reviews As low as $69.00 XSSMLXL Add to C' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Neve Studio Dance Jacket Rating: 87% 3 Reviews As low as $69.00 XSSMLXL Add to C' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Neve Studio Dance Jacket Rating: 87% 3 Reviews As low as $69.00 XSSMLXL Add to C' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Neve Studio Dance Jacket Rating: 87% 3 Reviews As low as $69.00 XSSMLXL Add to C' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Neve Studio Dance Jacket Rating: 87% 3 Reviews As low as $69.00 XSSMLXL Add to C' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Neve Studio Dance Jacket Rating: 87% 3 Reviews As low as $69.00 XSSMLXL Add to C' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Neve Studio Dance Jacket Rating: 87% 3 Reviews As low as $69.00 XSSMLXL Add to C' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Neve Studio Dance Jacket Rating: 87% 3 Reviews As low as $69.00 XSSMLXL Add to C' }).getByLabel('Orange').click();
  await page.locator('li').filter({ hasText: 'Nadia Elements Shell Rating: 60% 3 Reviews As low as $69.00 XSSMLXL Add to Cart ' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Nadia Elements Shell Rating: 60% 3 Reviews As low as $69.00 XSSMLXL Add to Cart ' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Nadia Elements Shell Rating: 60% 3 Reviews As low as $69.00 XSSMLXL Add to Cart ' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Nadia Elements Shell Rating: 60% 3 Reviews As low as $69.00 XSSMLXL Add to Cart ' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Nadia Elements Shell Rating: 60% 3 Reviews As low as $69.00 XSSMLXL Add to Cart ' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Nadia Elements Shell Rating: 60% 3 Reviews As low as $69.00 XSSMLXL Add to Cart ' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Nadia Elements Shell Rating: 60% 3 Reviews As low as $69.00 XSSMLXL Add to Cart ' }).getByLabel('Orange').click();
  await page.locator('li').filter({ hasText: 'Nadia Elements Shell Rating: 60% 3 Reviews As low as $69.00 XSSMLXL Add to Cart ' }).getByLabel('Yellow').click();
  await page.locator('#limiter').nth(1).selectOption('24');
  await page.locator('#limiter').nth(1).selectOption('36');
  await page.locator('#limiter').nth(1).selectOption('12');
  await page.getByRole('link', { name: ' Page Next' }).click();
  await page.locator('li').filter({ hasText: 'Ingrid Running Jacket Rating: 90% 2 Reviews As low as $84.00 XSSMLXL Add to Cart' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Ingrid Running Jacket Rating: 90% 2 Reviews As low as $84.00 XSSMLXL Add to Cart' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Ingrid Running Jacket Rating: 90% 2 Reviews As low as $84.00 XSSMLXL Add to Cart' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Ingrid Running Jacket Rating: 90% 2 Reviews As low as $84.00 XSSMLXL Add to Cart' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Ingrid Running Jacket Rating: 90% 2 Reviews As low as $84.00 XSSMLXL Add to Cart' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Ingrid Running Jacket Rating: 90% 2 Reviews As low as $84.00 XSSMLXL Add to Cart' }).getByLabel('Orange').click();
  await page.locator('li').filter({ hasText: 'Ingrid Running Jacket Rating: 90% 2 Reviews As low as $84.00 XSSMLXL Add to Cart' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Ingrid Running Jacket Rating: 90% 2 Reviews As low as $84.00 XSSMLXL Add to Cart' }).getByLabel('White').click();
  await page.locator('li').filter({ hasText: 'Stellar Solar Jacket Rating: 67% 3 Reviews As low as $75.00 SML Add to Cart Add ' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Stellar Solar Jacket Rating: 67% 3 Reviews As low as $75.00 SML Add to Cart Add ' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Stellar Solar Jacket Rating: 67% 3 Reviews As low as $75.00 SML Add to Cart Add ' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Stellar Solar Jacket Rating: 67% 3 Reviews As low as $75.00 SML Add to Cart Add ' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Stellar Solar Jacket Rating: 67% 3 Reviews As low as $75.00 SML Add to Cart Add ' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Stellar Solar Jacket Rating: 67% 3 Reviews As low as $75.00 SML Add to Cart Add ' }).getByLabel('Yellow').click();
  await page.locator('li').filter({ hasText: 'Helena Hooded Fleece As low as $55.00 XSSMLXL Add to Cart Add to Wish List Add t' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Helena Hooded Fleece As low as $55.00 XSSMLXL Add to Cart Add to Wish List Add t' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Helena Hooded Fleece As low as $55.00 XSSMLXL Add to Cart Add to Wish List Add t' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Helena Hooded Fleece As low as $55.00 XSSMLXL Add to Cart Add to Wish List Add t' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Helena Hooded Fleece As low as $55.00 XSSMLXL Add to Cart Add to Wish List Add t' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Helena Hooded Fleece As low as $55.00 XSSMLXL Add to Cart Add to Wish List Add t' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Helena Hooded Fleece As low as $55.00 XSSMLXL Add to Cart Add to Wish List Add t' }).getByLabel('Gray').click();
  await page.locator('li').filter({ hasText: 'Helena Hooded Fleece As low as $55.00 XSSMLXL Add to Cart Add to Wish List Add t' }).getByLabel('Yellow').click();
  await page.locator('li').filter({ hasText: 'Phoebe Zipper Sweatshirt As low as $59.00 XSSMLXL Add to Cart Add to Wish List A' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Phoebe Zipper Sweatshirt As low as $59.00 XSSMLXL Add to Cart Add to Wish List A' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Phoebe Zipper Sweatshirt As low as $59.00 XSSMLXL Add to Cart Add to Wish List A' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Phoebe Zipper Sweatshirt As low as $59.00 XSSMLXL Add to Cart Add to Wish List A' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Phoebe Zipper Sweatshirt As low as $59.00 XSSMLXL Add to Cart Add to Wish List A' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Phoebe Zipper Sweatshirt As low as $59.00 XSSMLXL Add to Cart Add to Wish List A' }).getByLabel('Gray').click();
  await page.locator('li').filter({ hasText: 'Phoebe Zipper Sweatshirt As low as $59.00 XSSMLXL Add to Cart Add to Wish List A' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Phoebe Zipper Sweatshirt As low as $59.00 XSSMLXL Add to Cart Add to Wish List A' }).getByLabel('White').click();
  await page.locator('li').filter({ hasText: 'Mona Pullover Hoodlie Rating: 87% 3 Reviews As low as $57.00 XSSMLXL Add to Cart' }).getByLabel('XS').click();
  await page.locator('li').filter({ hasText: 'Mona Pullover Hoodlie Rating: 87% 3 Reviews As low as $57.00 XSSMLXL Add to Cart' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Mona Pullover Hoodlie Rating: 87% 3 Reviews As low as $57.00 XSSMLXL Add to Cart' }).getByLabel('M', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Mona Pullover Hoodlie Rating: 87% 3 Reviews As low as $57.00 XSSMLXL Add to Cart' }).getByLabel('L', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Mona Pullover Hoodlie Rating: 87% 3 Reviews As low as $57.00 XSSMLXL Add to Cart' }).getByLabel('XL').click();
  await page.locator('li').filter({ hasText: 'Mona Pullover Hoodlie Rating: 87% 3 Reviews As low as $57.00 XSSMLXL Add to Cart' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Mona Pullover Hoodlie Rating: 87% 3 Reviews As low as $57.00 XSSMLXL Add to Cart' }).getByLabel('Orange').click();
  await page.locator('li').filter({ hasText: 'Mona Pullover Hoodlie Rating: 87% 3 Reviews As low as $57.00 XSSMLXL Add to Cart' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Sol Active Short As low as $32.00 32333436 Add to Cart Add to Wish List Add to C' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Sol Active Short As low as $32.00 32333436 Add to Cart Add to Wish List Add to C' }).getByLabel('33').click();
  await page.locator('li').filter({ hasText: 'Sol Active Short As low as $32.00 32333436 Add to Cart Add to Wish List Add to C' }).getByLabel('34').click();
  await page.locator('li').filter({ hasText: 'Sol Active Short As low as $32.00 32333436 Add to Cart Add to Wish List Add to C' }).getByLabel('36').click();
  await page.locator('li').filter({ hasText: 'Sol Active Short As low as $32.00 32333436 Add to Cart Add to Wish List Add to C' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Sol Active Short As low as $32.00 32333436 Add to Cart Add to Wish List Add to C' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Sol Active Short As low as $32.00 32333436 Add to Cart Add to Wish List Add to C' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Lono Yoga Short Rating: 70% 2 Reviews As low as $32.00 32333436 Add to Cart Add ' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Lono Yoga Short Rating: 70% 2 Reviews As low as $32.00 32333436 Add to Cart Add ' }).getByLabel('33').click();
  await page.locator('li').filter({ hasText: 'Lono Yoga Short Rating: 70% 2 Reviews As low as $32.00 32333436 Add to Cart Add ' }).getByLabel('34').click();
  await page.locator('li').filter({ hasText: 'Lono Yoga Short Rating: 70% 2 Reviews As low as $32.00 32333436 Add to Cart Add ' }).getByLabel('36').click();
  await page.locator('li').filter({ hasText: 'Lono Yoga Short Rating: 70% 2 Reviews As low as $32.00 32333436 Add to Cart Add ' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Lono Yoga Short Rating: 70% 2 Reviews As low as $32.00 32333436 Add to Cart Add ' }).getByLabel('Gray').click();
  await page.locator('li').filter({ hasText: 'Lono Yoga Short Rating: 70% 2 Reviews As low as $32.00 32333436 Add to Cart Add ' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Livingston All-Purpose Tight As low as $75.00 32333436 Add to Cart Add to Wish L' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Livingston All-Purpose Tight As low as $75.00 32333436 Add to Cart Add to Wish L' }).getByLabel('33').click();
  await page.locator('li').filter({ hasText: 'Livingston All-Purpose Tight As low as $75.00 32333436 Add to Cart Add to Wish L' }).getByLabel('34').click();
  await page.locator('li').filter({ hasText: 'Livingston All-Purpose Tight As low as $75.00 32333436 Add to Cart Add to Wish L' }).getByLabel('36').click();
  await page.locator('li').filter({ hasText: 'Livingston All-Purpose Tight As low as $75.00 32333436 Add to Cart Add to Wish L' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Livingston All-Purpose Tight As low as $75.00 32333436 Add to Cart Add to Wish L' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Livingston All-Purpose Tight As low as $75.00 32333436 Add to Cart Add to Wish L' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Zeppelin Yoga Pant As low as $82.00 32333436 Add to Cart Add to Wish List Add to' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Zeppelin Yoga Pant As low as $82.00 32333436 Add to Cart Add to Wish List Add to' }).getByLabel('33').click();
  await page.locator('li').filter({ hasText: 'Zeppelin Yoga Pant As low as $82.00 32333436 Add to Cart Add to Wish List Add to' }).getByLabel('34').click();
  await page.locator('li').filter({ hasText: 'Zeppelin Yoga Pant As low as $82.00 32333436 Add to Cart Add to Wish List Add to' }).getByLabel('36').click();
  await page.locator('li').filter({ hasText: 'Zeppelin Yoga Pant As low as $82.00 32333436 Add to Cart Add to Wish List Add to' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Zeppelin Yoga Pant As low as $82.00 32333436 Add to Cart Add to Wish List Add to' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Zeppelin Yoga Pant As low as $82.00 32333436 Add to Cart Add to Wish List Add to' }).getByLabel('Red').click();
  await page.locator('li').filter({ hasText: 'Thorpe Track Pant As low as $68.00 32333436 Add to Cart Add to Wish List Add to ' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Thorpe Track Pant As low as $68.00 32333436 Add to Cart Add to Wish List Add to ' }).getByLabel('33').click();
  await page.locator('li').filter({ hasText: 'Thorpe Track Pant As low as $68.00 32333436 Add to Cart Add to Wish List Add to ' }).getByLabel('34').click();
  await page.locator('li').filter({ hasText: 'Thorpe Track Pant As low as $68.00 32333436 Add to Cart Add to Wish List Add to ' }).getByLabel('36').click();
  await page.locator('li').filter({ hasText: 'Thorpe Track Pant As low as $68.00 32333436 Add to Cart Add to Wish List Add to ' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Thorpe Track Pant As low as $68.00 32333436 Add to Cart Add to Wish List Add to ' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Thorpe Track Pant As low as $68.00 32333436 Add to Cart Add to Wish List Add to ' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Kratos Gym Pant Rating: 73% 3 Reviews As low as $57.00 32333436 Add to Cart Add ' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Kratos Gym Pant Rating: 73% 3 Reviews As low as $57.00 32333436 Add to Cart Add ' }).getByLabel('33').click();
  await page.locator('li').filter({ hasText: 'Kratos Gym Pant Rating: 73% 3 Reviews As low as $57.00 32333436 Add to Cart Add ' }).getByLabel('34').click();
  await page.locator('li').filter({ hasText: 'Kratos Gym Pant Rating: 73% 3 Reviews As low as $57.00 32333436 Add to Cart Add ' }).getByLabel('36').click();
  await page.locator('li').filter({ hasText: 'Kratos Gym Pant Rating: 73% 3 Reviews As low as $57.00 32333436 Add to Cart Add ' }).getByLabel('Black').click();
  await page.locator('li').filter({ hasText: 'Kratos Gym Pant Rating: 73% 3 Reviews As low as $57.00 32333436 Add to Cart Add ' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Kratos Gym Pant Rating: 73% 3 Reviews As low as $57.00 32333436 Add to Cart Add ' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Geo Insulated Jogging Pant Rating: 70% 2 Reviews As low as $51.00 32333436 Add t' }).getByLabel('32').click();
  await page.locator('li').filter({ hasText: 'Geo Insulated Jogging Pant Rating: 70% 2 Reviews As low as $51.00 32333436 Add t' }).getByLabel('33').click();
  await page.locator('li').filter({ hasText: 'Geo Insulated Jogging Pant Rating: 70% 2 Reviews As low as $51.00 32333436 Add t' }).getByLabel('34').click();
  await page.locator('li').filter({ hasText: 'Geo Insulated Jogging Pant Rating: 70% 2 Reviews As low as $51.00 32333436 Add t' }).getByLabel('36').click();
  await page.locator('li').filter({ hasText: 'Geo Insulated Jogging Pant Rating: 70% 2 Reviews As low as $51.00 32333436 Add t' }).getByLabel('Blue').click();
  await page.locator('li').filter({ hasText: 'Geo Insulated Jogging Pant Rating: 70% 2 Reviews As low as $51.00 32333436 Add t' }).getByLabel('Green').click();
  await page.locator('li').filter({ hasText: 'Geo Insulated Jogging Pant Rating: 70% 2 Reviews As low as $51.00 32333436 Add t' }).getByLabel('Red').click();
  await page.getByRole('link', { name: 'Page 3' }).click();
  await page.getByRole('link', { name: 'Page 1' }).click();













});
