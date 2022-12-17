const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get emailField() {
        return $('input[name="email"]');
    }

    get passwordField() {
        return $('input[name="password"]');
    }

    get btnSubmit() {
        return $('.auth0-label-submit');
    }

    get authBtn() {
        return $('#signInOrRegister');
    }

<<<<<<< HEAD
    get errors() {
        return $('.auth0-lock-error-invalid-hint');
    }

=======
>>>>>>> wishlist
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(email, password) {
        await this.authBtn.click();
        await this.emailField.waitForDisplayed(4000);
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/');
    }
}

module.exports = new LoginPage();
