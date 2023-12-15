import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://usp-dev.usp-utal.com/login');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test7@test.pl');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('password');
    await page.getByRole('button', { name: 'Zaloguj się' }).click();
    await page.waitForTimeout(2000);


    await page.locator('div:nth-child(8) > .label').click();

    // sprawdzanie minusowej wartości
  await page.getByRole('row', { name: '01a Jednorzędowa bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '01a Jednorzędowa bez numerów, tło białe -' }).locator('#initial_quantity').fill('-10000');

  await page.getByRole('row', { name: '01b Jednorzędowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '01b Jednorzędowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '01c Jednorzędowa bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '01c Jednorzędowa bez numerów, tło żółte -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '01d Jednorzędowa bez numerów, tło zielone -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '01d Jednorzędowa bez numerów, tło zielone -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '02a Dwurzędowa bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '02a Dwurzędowa bez numerów, tło białe -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '02b Dwurzędowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '02b Dwurzędowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '02c Dwurzędowa bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '02c Dwurzędowa bez numerów, tło żółte -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '02d Dwurzędowa bez numerów, tło zielone -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '02d Dwurzędowa bez numerów, tło zielone -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '03a Motocyklowa bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '03a Motocyklowa bez numerów, tło białe -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '03b Motocyklowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '03b Motocyklowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '03c Motocyklowa bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '03c Motocyklowa bez numerów, tło żółte -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '03d Motocyklowa bez numerów, tło zielone -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '03d Motocyklowa bez numerów, tło zielone -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '04a Motorowerowa bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '04a Motorowerowa bez numerów, tło białe -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '04b Motorowerowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '04b Motorowerowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '04c Motorowerowa bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '04c Motorowerowa bez numerów, tło żółte -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '04d Motorowerowa bez numerów, tło zielone -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '04d Motorowerowa bez numerów, tło zielone -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '05a Jednorzędowa zmniejszona bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '05a Jednorzędowa zmniejszona bez numerów, tło białe -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '05b Jednorzędowa zmniejszona bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '05b Jednorzędowa zmniejszona bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '05c Jednorzędowa zmniejszona bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '05c Jednorzędowa zmniejszona bez numerów, tło żółte -' }).locator('#initial_quantity').fill('-10000');
  await page.getByRole('row', { name: '05d Jednorzędowa zmniejszona bez numerów, tło zielone -' }).locator('#initial_quantity').click();
    await page.getByRole('row', { name: '05d Jednorzędowa zmniejszona bez numerów, tło zielone -' }).locator('#initial_quantity').fill('-10000');

    await page.getByRole('button', { name: 'Zatwierdź' }).click();
    await expect (page.locator('div').filter({ hasText: /^Zmiany zostały zapisane\.$/ }).nth(1)).toBeHidden

    // poprawne wartości

    await page.getByRole('row', { name: '01a Jednorzędowa bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '01a Jednorzędowa bez numerów, tło białe -' }).locator('#initial_quantity').fill('10000');

  await page.getByRole('row', { name: '01b Jednorzędowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '01b Jednorzędowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '01c Jednorzędowa bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '01c Jednorzędowa bez numerów, tło żółte -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '01d Jednorzędowa bez numerów, tło zielone -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '01d Jednorzędowa bez numerów, tło zielone -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '02a Dwurzędowa bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '02a Dwurzędowa bez numerów, tło białe -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '02b Dwurzędowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '02b Dwurzędowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '02c Dwurzędowa bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '02c Dwurzędowa bez numerów, tło żółte -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '02d Dwurzędowa bez numerów, tło zielone -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '02d Dwurzędowa bez numerów, tło zielone -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '03a Motocyklowa bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '03a Motocyklowa bez numerów, tło białe -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '03b Motocyklowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '03b Motocyklowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '03c Motocyklowa bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '03c Motocyklowa bez numerów, tło żółte -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '03d Motocyklowa bez numerów, tło zielone -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '03d Motocyklowa bez numerów, tło zielone -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '04a Motorowerowa bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '04a Motorowerowa bez numerów, tło białe -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '04b Motorowerowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '04b Motorowerowa bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '04c Motorowerowa bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '04c Motorowerowa bez numerów, tło żółte -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '04d Motorowerowa bez numerów, tło zielone -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '04d Motorowerowa bez numerów, tło zielone -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '05a Jednorzędowa zmniejszona bez numerów, tło białe -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '05a Jednorzędowa zmniejszona bez numerów, tło białe -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '05b Jednorzędowa zmniejszona bez numerów, tło niebieskie -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '05b Jednorzędowa zmniejszona bez numerów, tło niebieskie -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '05c Jednorzędowa zmniejszona bez numerów, tło żółte -' }).locator('#initial_quantity').click();
  await page.getByRole('row', { name: '05c Jednorzędowa zmniejszona bez numerów, tło żółte -' }).locator('#initial_quantity').fill('10000');
  await page.getByRole('row', { name: '05d Jednorzędowa zmniejszona bez numerów, tło zielone -' }).locator('#initial_quantity').click();
    await page.getByRole('row', { name: '05d Jednorzędowa zmniejszona bez numerów, tło zielone -' }).locator('#initial_quantity').fill('10000');

    await page.getByRole('button', { name: 'Zatwierdź' }).click();
    await expect (page.locator('div').filter({ hasText: /^Zmiany zostały zapisane\.$/ }).nth(1)).toBeVisible












    await page.pause();

await page.getByLabel('User menu').click();
  await page.getByRole('link', { name: 'Wyloguj' }).click();





 await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test8@test.pl');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
    await page.getByRole('button', { name: 'Zaloguj się' }).click();
    await page.waitForTimeout(2000);



  await page.locator('div:nth-child(6) > .label > .left > .h-8').click();
  await page.getByRole('link', { name: 'Dodaj nową umowę' }).click();
  await page.getByLabel('Sygnatura').click();
  await page.getByLabel('Sygnatura').fill('Test 1');
  await page.locator('#supplier-input').selectOption('98ee67ba-5d73-4fef-869a-cddca96c6435');
  await page.locator('div').filter({ hasText: /^Data rozpoczęcia umowy$/ }).getByRole('combobox').click();
  await page.getByLabel('Choose Year').click();
  await page.getByText('2023').click();
  await page.getByText('Paz').click();
  await page.getByText('17').click();
  await page.locator('div').filter({ hasText: /^Data wygaśnięcia umowy$/ }).getByRole('combobox').click();
  await page.getByLabel('Choose Year').click();
  await page.getByText('2029', { exact: true }).click();
  await page.getByText('Gru').click();
  await page.getByText('31', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Wartość umowy$/ }).locator('#description').click();
  await page.locator('div').filter({ hasText: /^Wartość umowy$/ }).locator('#description').fill('1000000000');
  await page.getByRole('row', { name: 'Samochodowa zwyczajna jednorzędowa Skopiuj Skopiuj' }).locator('#amount').click();
  await page.getByRole('row', { name: 'Samochodowa zwyczajna jednorzędowa Skopiuj Skopiuj' }).locator('#amount').fill('2000');
  await page.getByRole('button', { name: 'Skopiuj' }).first().click();
  await page.getByRole('row', { name: 'Samochodowa zwyczajna jednorzędowa Skopiuj Skopiuj' }).getByRole('spinbutton').nth(1).click();
  await page.getByRole('row', { name: 'Samochodowa zwyczajna jednorzędowa Skopiuj Skopiuj' }).getByRole('spinbutton').nth(1).fill('50000');
  await page.getByRole('button', { name: 'Skopiuj' }).nth(1).click();
    await page.getByRole('button', { name: 'Zatwierdź' }).click();






});
