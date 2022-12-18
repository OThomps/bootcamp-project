const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get incrementQuantity() {
        return $('button[title="Increment quantity"]');
    }

    get quantity() {
        return $('.snipcart-item-quantity__quantity');
    }

    get bagIcon() {
        return $('.snipcart-cart-header__option');
    }

    get deleteBtn() {
        return $('button[title="Remove item"]');
    }

    get fitted() {
        return $('button[data-item-name="Quality Fitted Hat"]');
    }

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
        return super.open('products#/cart/');
    }
}

module.exports = new CartPage();
