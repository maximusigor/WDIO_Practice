const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url("https://github.com/");

        await LoginPage.clickSingInButton();
       await LoginPage.login('shilov0209@gmail.com', 'login');
       await LoginPage.clickLoginFormSingInButton();
        
        await browser.pause(10000);
    });
});
