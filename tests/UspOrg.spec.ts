import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://usp-dev.usp-utal.com/login');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('usp@utal.pl');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('Password');//Nie moge udostępnić hasła firmy dla której robiłem ten kod
    await page.getByRole('button', { name: 'Zaloguj się' }).click();
    await page.waitForTimeout(2000);



//Dodawanie nowej ogranizacji nr 1 bez rozwijania

    await page.locator('div:nth-child(5) > div').first().hover();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').getByText('Organizacje').click();


    await page.getByRole('link', { name: 'Dodaj organizacje' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#organization_name').click();

  await page.locator('#organization_name').click();
  await page.locator('#organization_name').fill('Derpol');
  await page.locator('#organization_shortname').click();
  await page.locator('#organization_shortname').fill('Derpol');
    await page.getByLabel('Kraj').first().selectOption({ label: 'Polska' });
await page.waitForTimeout(1000);
    await page.getByLabel('Powiat').selectOption({ label: 'Powiat bydgoski' });
  await page.locator('div').filter({ hasText: /^Bezterminowo$/ }).getByRole('checkbox').check();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').fill('ZTG');
  await page.getByLabel('Prefiks zamówienia na tablice surowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice surowe').fill('ZTS');
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').click();
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').fill('ZZT');
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').click();
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').fill('ZWS');
    await page.getByRole('checkbox', { name: 'Ta organizacja jest producentem tablic gotowych i ma dostęp do funkcji związanych z produkcją tablic z numerami.' }).check();


    await page.locator('#invoice_info_address_line_1').click();
  await page.locator('#invoice_info_address_line_1').fill('ul. Poznańska 373');
  await page.locator('#zip_id').click();
  await page.locator('#zip_id').fill('85-102');
  await page.locator('#invoice_info_city_id').click();
  await page.locator('#invoice_info_city_id').fill('Bydgoszcz');
  await page.getByLabel('Województwo / Stan').click();
  await page.getByLabel('Województwo / Stan').fill('Kujawsko-pomorskie');
  await page.locator('#invoice_info_tax_id').click();
  await page.locator('#invoice_info_tax_id').fill('106-00-00-062');
  await page.getByLabel('Numer telefonu').click();
  await page.getByLabel('Numer telefonu').fill('123123123');
  await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test@test.pl');



await page.getByLabel('Imię').click();
  await page.getByLabel('Imię').fill('Grzegorz');
  await page.getByLabel('Nazwisko').click();
  await page.getByLabel('Nazwisko').fill('Boczniak');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
  await page.getByLabel('Powtórz hasło').click();
  await page.getByLabel('Powtórz hasło').fill('testtest');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test@test.pl');
  await page.getByLabel('Stanowisko').click();
    await page.getByLabel('Stanowisko').fill('Zastępca Kierownika');


    await page.getByRole('button', { name: 'Utwórz' }).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://usp-dev.usp-utal.com/organization/organization-list')


    // tutaj dodać finalizacje rejestracji firmy




//Dodawanie nowej ogranizacji nr 2 bez rozwijania
await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').first().hover();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').getByText('Organizacje').click();


    await page.getByRole('link', { name: 'Dodaj organizacje' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#organization_name').click();

  await page.locator('#organization_name').click();
  await page.locator('#organization_name').fill('Em - Spółka jawna');
  await page.locator('#organization_shortname').click();
  await page.locator('#organization_shortname').fill('Em');
    await page.getByLabel('Kraj').first().selectOption({ label: 'Polska' });
    await page.waitForTimeout(1000);

    await page.getByLabel('Powiat').selectOption({ label: 'Warszawa' });
    await page.locator('div').filter({ hasText: /^Bezterminowo$/ }).getByRole('checkbox').check();

  await page.getByLabel('Prefiks zamówienia na tablice gotowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').fill('ZTG');
  await page.getByLabel('Prefiks zamówienia na tablice surowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice surowe').fill('ZTS');
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').click();
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').fill('ZZT');
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').click();
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').fill('ZWS');
    await page.getByRole('checkbox', { name: 'Ta organizacja jest producentem tablic surowych i ma dostęp do funkcji związanych z produkcją tablic bez numerów.' }).check();


    await page.locator('#invoice_info_address_line_1').click();
  await page.locator('#invoice_info_address_line_1').fill('ul. Wólczyńska 244');
  await page.locator('#zip_id').click();
  await page.locator('#zip_id').fill('01-919');
  await page.locator('#invoice_info_city_id').click();
  await page.locator('#invoice_info_city_id').fill('Warszawa');
  await page.getByLabel('Województwo / Stan').click();
  await page.getByLabel('Województwo / Stan').fill('Mazowieckie');
  await page.locator('#invoice_info_tax_id').click();
  await page.locator('#invoice_info_tax_id').fill('106-22-03-032');
  await page.getByLabel('Numer telefonu').click();
  await page.getByLabel('Numer telefonu').fill('943943943');
  await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test2@test.pl');



await page.getByLabel('Imię').click();
  await page.getByLabel('Imię').fill('Andrzej');
  await page.getByLabel('Nazwisko').click();
  await page.getByLabel('Nazwisko').fill('Mameluk');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
  await page.getByLabel('Powtórz hasło').click();
  await page.getByLabel('Powtórz hasło').fill('testtest');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test2@test.pl');
  await page.getByLabel('Stanowisko').click();
    await page.getByLabel('Stanowisko').fill('Kierownik');



     await page.getByRole('button', { name: 'Utwórz' }).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://usp-dev.usp-utal.com/organization/organization-list')


    // tutaj dodać finalizacje rejestracji firmy




//Dodawanie nowej ogranizacji nr 3 bez rozwijania
await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').first().hover();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').getByText('Organizacje').click();


    await page.getByRole('link', { name: 'Dodaj organizacje' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#organization_name').click();

  await page.locator('#organization_name').click();
  await page.locator('#organization_name').fill('Urząd Miasta Bydgoszcz');
  await page.locator('#organization_shortname').click();
  await page.locator('#organization_shortname').fill('UM Bydgoszcz');
    await page.getByLabel('Kraj').first().selectOption({ label: 'Polska' });
await page.waitForTimeout(1000);
    await page.getByLabel('Powiat').selectOption({ label: 'Powiat bydgoski' });
  await page.locator('div').filter({ hasText: /^Bezterminowo$/ }).getByRole('checkbox').check();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').fill('ZTG');
  await page.getByLabel('Prefiks zamówienia na tablice surowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice surowe').fill('ZTS');
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').click();
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').fill('ZZT');
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').click();
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').fill('ZWS');
    await page.getByRole('checkbox', { name: 'Ta organizacja jest organem wydającym tablic (np. jest wydziałem komunikacji) i ma dostęp do funkcji związanych z zamawianiem tablic i zarządzaniem pulami numerów rejestracyjnych.' }).check();

    await page.locator('#invoice_info_address_line_1').click();
  await page.locator('#invoice_info_address_line_1').fill('ul. Jezuicka 1');
  await page.locator('#zip_id').click();
  await page.locator('#zip_id').fill('85-102');
  await page.locator('#invoice_info_city_id').click();
  await page.locator('#invoice_info_city_id').fill('Bydgoszcz');
  await page.getByLabel('Województwo / Stan').click();
  await page.getByLabel('Województwo / Stan').fill('Kujawsko-pomorskie');
  await page.locator('#invoice_info_tax_id').click();
  await page.locator('#invoice_info_tax_id').fill('106-83-04-062');
  await page.getByLabel('Numer telefonu').click();
  await page.getByLabel('Numer telefonu').fill('001001001');
  await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test3@test.pl');



await page.getByLabel('Imię').click();
  await page.getByLabel('Imię').fill('Mariusz');
  await page.getByLabel('Nazwisko').click();
  await page.getByLabel('Nazwisko').fill('Bzyczek');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
  await page.getByLabel('Powtórz hasło').click();
  await page.getByLabel('Powtórz hasło').fill('testtest');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test3@test.pl');
  await page.getByLabel('Stanowisko').click();
    await page.getByLabel('Stanowisko').fill('Rzecznik Ds Komunikacji');



     await page.getByRole('button', { name: 'Utwórz' }).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://usp-dev.usp-utal.com/organization/organization-list')


// tutaj dodać finalizacje rejestracji firmy




    //Dodawanie nowej ogranizacji nr 4 z rozwijaniem

    await page.locator('.bottomBtn').click();




    await page.waitForTimeout(1000);
    await page.locator('.icons').first().click();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').first().hover();
    await page.locator('div:nth-child(5) > div').getByText('Organizacje').click();


    await page.getByRole('link', { name: 'Dodaj organizacje' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#organization_name').click();

  await page.locator('#organization_name').click();
  await page.locator('#organization_name').fill('Derpol2');
  await page.locator('#organization_shortname').click();
  await page.locator('#organization_shortname').fill('Derpol2');
    await page.getByLabel('Kraj').first().selectOption({ label: 'Polska' });
await page.waitForTimeout(1000);
    await page.getByLabel('Powiat').selectOption({ label: 'Powiat bydgoski' });
  await page.locator('div').filter({ hasText: /^Bezterminowo$/ }).getByRole('checkbox').check();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').fill('ZTG');
  await page.getByLabel('Prefiks zamówienia na tablice surowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice surowe').fill('ZTS');
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').click();
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').fill('ZZT');
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').click();
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').fill('ZWS');
    await page.getByRole('checkbox', { name: 'Ta organizacja jest producentem tablic gotowych i ma dostęp do funkcji związanych z produkcją tablic z numerami.' }).check();


    await page.locator('#invoice_info_address_line_1').click();
  await page.locator('#invoice_info_address_line_1').fill('ul. Poznańska 372');
  await page.locator('#zip_id').click();
  await page.locator('#zip_id').fill('85-102');
  await page.locator('#invoice_info_city_id').click();
  await page.locator('#invoice_info_city_id').fill('Bydgoszcz');
  await page.getByLabel('Województwo / Stan').click();
  await page.getByLabel('Województwo / Stan').fill('Kujawsko-pomorskie');
  await page.locator('#invoice_info_tax_id').click();
  await page.locator('#invoice_info_tax_id').fill('106-00-01-062');
  await page.getByLabel('Numer telefonu').click();
  await page.getByLabel('Numer telefonu').fill('123123123');
  await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test4@test.pl');



await page.getByLabel('Imię').click();
  await page.getByLabel('Imię').fill('Miłosz');
  await page.getByLabel('Nazwisko').click();
  await page.getByLabel('Nazwisko').fill('Dzida');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
  await page.getByLabel('Powtórz hasło').click();
  await page.getByLabel('Powtórz hasło').fill('testtest');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test4@test.pl');
  await page.getByLabel('Stanowisko').click();
    await page.getByLabel('Stanowisko').fill('Kierownik');


    await page.getByRole('button', { name: 'Utwórz' }).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://usp-dev.usp-utal.com/organization/organization-list')

    // tutaj dodać finalizacje rejestracji firmy




    //Dodawanie nowej ogranizacji nr 5 z rozwijaniem




    await page.locator('div:nth-child(5) > div').first().hover();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').getByText('Organizacje').click();


    await page.getByRole('link', { name: 'Dodaj organizacje' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#organization_name').click();

  await page.locator('#organization_name').click();
  await page.locator('#organization_name').fill('Em2 - Spółka jawna');
  await page.locator('#organization_shortname').click();
  await page.locator('#organization_shortname').fill('Em2');
    await page.getByLabel('Kraj').first().selectOption({ label: 'Polska' });
    await page.waitForTimeout(1000);

    await page.getByLabel('Powiat').selectOption({ label: 'Warszawa' });
    await page.locator('div').filter({ hasText: /^Bezterminowo$/ }).getByRole('checkbox').check();

  await page.getByLabel('Prefiks zamówienia na tablice gotowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').fill('ZTG');
  await page.getByLabel('Prefiks zamówienia na tablice surowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice surowe').fill('ZTS');
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').click();
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').fill('ZZT');
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').click();
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').fill('ZWS');
    await page.getByRole('checkbox', { name: 'Ta organizacja jest producentem tablic surowych i ma dostęp do funkcji związanych z produkcją tablic bez numerów.' }).check();


    await page.locator('#invoice_info_address_line_1').click();
  await page.locator('#invoice_info_address_line_1').fill('ul. Wólczyńska 243');
  await page.locator('#zip_id').click();
  await page.locator('#zip_id').fill('01-919');
  await page.locator('#invoice_info_city_id').click();
  await page.locator('#invoice_info_city_id').fill('Warszawa');
  await page.getByLabel('Województwo / Stan').click();
  await page.getByLabel('Województwo / Stan').fill('Mazowieckie');
  await page.locator('#invoice_info_tax_id').click();
  await page.locator('#invoice_info_tax_id').fill('206-22-23-032');
  await page.getByLabel('Numer telefonu').click();
  await page.getByLabel('Numer telefonu').fill('943543943');
  await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test5@test.pl');



await page.getByLabel('Imię').click();
  await page.getByLabel('Imię').fill('Mateusz');
  await page.getByLabel('Nazwisko').click();
  await page.getByLabel('Nazwisko').fill('Pestka');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
  await page.getByLabel('Powtórz hasło').click();
  await page.getByLabel('Powtórz hasło').fill('testtest');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test5@test.pl');
  await page.getByLabel('Stanowisko').click();
    await page.getByLabel('Stanowisko').fill('Główny Informatyk');



     await page.getByRole('button', { name: 'Utwórz' }).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://usp-dev.usp-utal.com/organization/organization-list')


    // tutaj dodać finalizacje rejestracji firmy




    //Dodawanie nowej ogranizacji nr 6 z rozwijaniem



    await page.locator('div:nth-child(5) > div').first().hover();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').getByText('Organizacje').click();


    await page.getByRole('link', { name: 'Dodaj organizacje' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#organization_name').click();

  await page.locator('#organization_name').click();
  await page.locator('#organization_name').fill('Urząd Miasta Bydgoszcz2');
  await page.locator('#organization_shortname').click();
  await page.locator('#organization_shortname').fill('UM Bydgoszcz2');
    await page.getByLabel('Kraj').first().selectOption({ label: 'Polska' });
await page.waitForTimeout(1000);
    await page.getByLabel('Powiat').selectOption({ label: 'Powiat bydgoski' });
  await page.locator('div').filter({ hasText: /^Bezterminowo$/ }).getByRole('checkbox').check();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').fill('ZTG');
  await page.getByLabel('Prefiks zamówienia na tablice surowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice surowe').fill('ZTS');
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').click();
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').fill('ZZT');
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').click();
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').fill('ZWS');
    await page.getByRole('checkbox', { name: 'Ta organizacja jest organem wydającym tablic (np. jest wydziałem komunikacji) i ma dostęp do funkcji związanych z zamawianiem tablic i zarządzaniem pulami numerów rejestracyjnych.' }).check();

    await page.locator('#invoice_info_address_line_1').click();
  await page.locator('#invoice_info_address_line_1').fill('ul. Jezuicka 10');
  await page.locator('#zip_id').click();
  await page.locator('#zip_id').fill('85-102');
  await page.locator('#invoice_info_city_id').click();
  await page.locator('#invoice_info_city_id').fill('Bydgoszcz');
  await page.getByLabel('Województwo / Stan').click();
  await page.getByLabel('Województwo / Stan').fill('Kujawsko-pomorskie');
  await page.locator('#invoice_info_tax_id').click();
  await page.locator('#invoice_info_tax_id').fill('106-81-04-062');
  await page.getByLabel('Numer telefonu').click();
  await page.getByLabel('Numer telefonu').fill('001201001');
  await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test6@test.pl');



await page.getByLabel('Imię').click();
  await page.getByLabel('Imię').fill('Bernard');
  await page.getByLabel('Nazwisko').click();
  await page.getByLabel('Nazwisko').fill('Gąbka');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
  await page.getByLabel('Powtórz hasło').click();
  await page.getByLabel('Powtórz hasło').fill('testtest');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test6@test.pl');
  await page.getByLabel('Stanowisko').click();
    await page.getByLabel('Stanowisko').fill('Rzecznik Ds Informatyzacji');



    await page.getByRole('button', { name: 'Utwórz' }).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://usp-dev.usp-utal.com/organization/organization-list')

    // tutaj dodać finalizacje rejestracji firmy


    //Dodawanie nowej ogranizacji nr 7 z rozwijaniem



    await page.locator('div:nth-child(5) > div').first().hover();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').getByText('Organizacje').click();


    await page.getByRole('link', { name: 'Dodaj organizacje' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#organization_name').click();

  await page.locator('#organization_name').click();
  await page.locator('#organization_name').fill('Derpol3');
  await page.locator('#organization_shortname').click();
  await page.locator('#organization_shortname').fill('Derpol3');
    await page.getByLabel('Kraj').first().selectOption({ label: 'Polska' });
await page.waitForTimeout(1000);
    await page.getByLabel('Powiat').selectOption({ label: 'Powiat bydgoski' });
  await page.locator('div').filter({ hasText: /^Bezterminowo$/ }).getByRole('checkbox').check();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').fill('ZTG');
  await page.getByLabel('Prefiks zamówienia na tablice surowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice surowe').fill('ZTS');
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').click();
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').fill('ZZT');
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').click();
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').fill('ZWS');
    await page.getByRole('checkbox', { name: 'Ta organizacja jest producentem tablic gotowych i ma dostęp do funkcji związanych z produkcją tablic z numerami.' }).check();
  await page.getByRole('checkbox', { name: 'Ta organizacja jest producentem tablic surowych i ma dostęp do funkcji związanych z produkcją tablic bez numerów.' }).check();

    await page.locator('#invoice_info_address_line_1').click();
  await page.locator('#invoice_info_address_line_1').fill('ul. Jezuicka 11');
  await page.locator('#zip_id').click();
  await page.locator('#zip_id').fill('85-102');
  await page.locator('#invoice_info_city_id').click();
  await page.locator('#invoice_info_city_id').fill('Bydgoszcz');
  await page.getByLabel('Województwo / Stan').click();
  await page.getByLabel('Województwo / Stan').fill('Kujawsko-pomorskie');
  await page.locator('#invoice_info_tax_id').click();
  await page.locator('#invoice_info_tax_id').fill('126-81-04-062');
  await page.getByLabel('Numer telefonu').click();
  await page.getByLabel('Numer telefonu').fill('021201001');
  await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test7@test.pl');




await page.getByLabel('Imię').click();
  await page.getByLabel('Imię').fill('Michał');
  await page.getByLabel('Nazwisko').click();
  await page.getByLabel('Nazwisko').fill('Listonosz');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
  await page.getByLabel('Powtórz hasło').click();
  await page.getByLabel('Powtórz hasło').fill('testtest');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('test7@test.pl');
  await page.getByLabel('Stanowisko').click();
    await page.getByLabel('Stanowisko').fill('GŁówny Informatyk');



     await page.getByRole('button', { name: 'Utwórz' }).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://usp-dev.usp-utal.com/organization/organization-list')

    // tutaj dodać finalizacje rejestracji firmy


    //Dodawanie nowej ogranizacji nr 8 z rozwijaniem



    await page.locator('div:nth-child(5) > div').first().hover();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(5) > div').getByText('Organizacje').click();


    await page.getByRole('link', { name: 'Dodaj organizacje' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#organization_name').click();

  await page.locator('#organization_name').click();
    await page.locator('#organization_name').fill('Urząd Miasta Bydgoszcz2');
    //expect
  await page.locator('#organization_shortname').click();
    await page.locator('#organization_shortname').fill('UM Bydgoszcz2');
    //expect
    await page.getByLabel('Kraj').first().selectOption({ label: 'Polska' });
await page.waitForTimeout(1000);
    await page.getByLabel('Powiat').selectOption({ label: 'Powiat bydgoski' });
  await page.locator('div').filter({ hasText: /^Bezterminowo$/ }).getByRole('checkbox').check();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice gotowe').fill('ZTG');
  await page.getByLabel('Prefiks zamówienia na tablice surowe').click();
  await page.getByLabel('Prefiks zamówienia na tablice surowe').fill('ZTS');
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').click();
  await page.getByLabel('Prefiks zlecenia zniszczenia tablic').fill('ZZT');
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').click();
  await page.locator('div').filter({ hasText: /^Prefiks zamówienia wewnętrznego na tablice surowe$/ }).locator('#prefix_scrap').fill('ZWS');
    await page.getByRole('checkbox', { name: 'Ta organizacja jest organem wydającym tablic (np. jest wydziałem komunikacji) i ma dostęp do funkcji związanych z zamawianiem tablic i zarządzaniem pulami numerów rejestracyjnych.' }).check();

    await page.locator('#invoice_info_address_line_1').click();
  await page.locator('#invoice_info_address_line_1').fill('ul. Jezuicka 18');
  await page.locator('#zip_id').click();
  await page.locator('#zip_id').fill('85-102');
  await page.locator('#invoice_info_city_id').click();
  await page.locator('#invoice_info_city_id').fill('Bydgoszcz');
  await page.getByLabel('Województwo / Stan').click();
  await page.getByLabel('Województwo / Stan').fill('Kujawsko-pomorskie');
  await page.locator('#invoice_info_tax_id').click();
  await page.locator('#invoice_info_tax_id').fill('106-81-04-062');
  await page.getByLabel('Numer telefonu').click();
    await page.getByLabel('Numer telefonu').fill('001201001');

  await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('Test6@test.pl');
    //expect



await page.getByLabel('Imię').click();
  await page.getByLabel('Imię').fill('Krzysztof');
  await page.getByLabel('Nazwisko').click();
  await page.getByLabel('Nazwisko').fill('Niebiański');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('testtest');
  await page.getByLabel('Powtórz hasło').click();
  await page.getByLabel('Powtórz hasło').fill('testtest');
  await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').fill('test6@test.pl');
    //expect
  await page.getByLabel('Stanowisko').click();
    await page.getByLabel('Stanowisko').fill('Rzecznik Ds Informatyzacji');



     await page.getByRole('button', { name: 'Utwórz' }).click();
    await page.waitForTimeout(3000);
    await expect(page.locator('div').filter({ hasText: /^Ta wartość musi być unikatowa\.$/ }).nth(1)).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Ta wartość musi być unikatowa\.$/ }).nth(3)).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Użytkownik o takim adresie e-mail już istnieje\.$/ }).nth(1)).toBeVisible();



 await page.locator('#organization_name').click();
    await page.locator('#organization_name').fill('Derpol4');

  await page.locator('#organization_shortname').click();
    await page.locator('#organization_shortname').fill('Derpol4');

await page.getByLabel('Email', { exact: true }).fill('Test8@test.pl');

    await page.getByLabel('Email:').fill('test8@test.pl');








    await page.getByRole('button', { name: 'Utwórz' }).click();
    await expect(page).toHaveURL('https://usp-dev.usp-utal.com/organization/organization-list')

    // tutaj dodać finalizacje rejestracji firmy



});
