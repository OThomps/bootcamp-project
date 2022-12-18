const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productName() {
        return $('h2.css-1dklj6k:nth-child(1)');
    }

    get nextCarousel() {
        return $('button[aria-label="next slide / item"]');
    }

    get carouselStatus() {
        return $('.carousel-status');
    }

    get iconIncrease() {
        return $('#product-increase');
    }

    get quantityField() {
        return $('.chakra-numberinput__field');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('products/quality-hat-model/');
    }
}

module.exports = new CartPage();
