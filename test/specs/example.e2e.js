const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url("https://github.com/");
        await LoginPage.clickSingInButton();
        await LoginPage.login('@gmail.com', 'password');
        await LoginPage.clickLoginFormSingInButton(); 
        await LoginPage.clickMenu();
        await LoginPage.clickItemMenuButton();
        await browser.pause(10000);
    });
});