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

    get allCartItems() {
        return $$('li[class="snipcart-item-line snipcart-item-line--cart-edit"]');
    }

    get closeCartSummary() {
        return $('svg[title="Remove item"]');
    }

    get cartItemQuantity() {
        return $('.snipcart-item-quantity__quantity');
    }

    get prodIconIncrease() {
        return $('#product-0-increase');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addSingle() {
        //bring button into view and click
        await this.addCartBtn.waitForDisplayed(5000);
        await this.addCartBtn.scrollIntoView();
        await this.addCartBtn.click();
    }

    async addSurplus() {
        //clearValue doesn't seem to work so send backspace to clear input field
        await this.quantityInput.scrollIntoView({ block: 'center', inline: 'center' });
        await this.quantityInput.click();
        await browser.keys('\b');
        await this.quantityInput.setValue(50);
        await this.addCartBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('products/');
    }
}

module.exports = new AddToCart();
