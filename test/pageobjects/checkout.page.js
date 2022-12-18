const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get nameField() {
        return $('input[name="name"]');
    }

    get emailField() {
        return $('input[name="email"]');
    }

    get streetField() {
        return $('input[name="address1"]');
    }

    get aptField() {
        return $('input[name="address2"]');
    }

    get cityField() {
        return $('input[name="city"]');
    }

    get country() {
        return $('//label[text()="Country"]/following::div[6]/input');
    }
    get province() {
        return $('//label[text()="Province/State"]/following::div[6]/input')
    }

    get zipField() {
        return $('input[name="postalCode"]');
    }

    get errors() {
        return $('.snipcart-field-error');
    }

    get orderBtn() {
        return $('.snipcart-button-primary');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async completeBilling(name, email, street, apt, city, zip) {
        await this.nameField.setValue(name);
        await this.emailField.setValue(email);
        await this.streetField.setValue(street);
        await this.aptField.setValue(apt);
        await this.cityField.setValue(city);
        await this.country.setValue('United States');
        await browser.keys("\uE007");
        await this.province.setValue('Alabama');
        await browser.keys("\uE007");
        await this.zipField.setValue(zip);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('products#/checkout/');
    }
}

module.exports = new CheckoutPage();
