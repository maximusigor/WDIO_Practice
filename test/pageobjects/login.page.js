

const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#login_field');
    }

    get inputPassword() {
        return $('#password');
    }

    get signInButton() {
        return $("//a[@href='/login']");
    }

    get loginFormSignInButton() {
        return $("//input[@type='submit']");
    }

    get menuButton(){
        return $(".Header-link[aria-label='View profile and more']");
    }

    get itemMenu(){
        return $(".dropdown-item[href='/maximusigor']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickSingInButton() {
        await this.signInButton.click();
    }

    async clickLoginFormSingInButton() {
        await this.loginFormSignInButton.click();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async clickMenu() {
        await this.menuButton.click();
    }

    async clickItemMenuButton() {
        await this.itemMenu.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

module.exports = new LoginPage();
