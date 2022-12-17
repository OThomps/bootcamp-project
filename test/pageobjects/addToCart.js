const { $ } = require('webdriverio/build/commands/browser');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddToCart extends Page {
    /**
     * define selectors using getter methods
     */
    get addCartBtn() {
        return $('button[id="add-to-cart"]');
    }

    get cartSummaryTitle() {
        return $('h1.snipcart__font--secondary');
    }

    get cartItemTitle() {
        return $('.snipcart-item-line__title');
    }

    get quantityInput() {
        return $('input[class="chakra-numberinput__field css-a8qclj"]');
    }

    get addFittedHat() {
        return $('button[data-item-name="Quality Fitted Hat"]');
    }

    get addTruckerHat() {
        return $('button[data-item-name="Quality Trucker Hat"]');
    }

    get addMousepad() {
        return $('button[data-item-name="Quality Mousepad"]');
    }

    get allCartItems() {
        return $$('li[class="snipcart-item-line snipcart-item-line--cart-edit"]');
    }

    get closeCartSummary() {
        return $('svg[title="Remove item"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addSingle() {
        //bring button into view and click
        await this.addCartBtn.scrollIntoView();
        await this.addCartBtn.click();
    }

    async addMulti() {
        //adding an item triggers cart summary to pop out, so close after first two items are added
        await this.addFittedHat.scrollIntoView();
        await this.addFittedHat.click();
        await this.closeCartSummary.click();
        await this.addTruckerHat.click();
        await this.closeCartSummary.click();
        await this.addMousepad.click();
    }

    async addSurplus() {
        //clearValue doesn't seem to work so send backspace to clear input field
        await this.quantityInput.scrollIntoView();
        await this.quantityInput.click();
        await this.quantityInput.sendKeys('\b');
        await this.quantityInput.setValue(50);
        await this.addCartBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/');
    }
}

module.exports = new AddToCart();
