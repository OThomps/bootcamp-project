const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductGallery extends Page {
    /**
     * define selectors using getter methods
     */
    get allItems() {
        return $$('[id^="product-"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('products#/');
    }
}

module.exports = new ProductGallery();
