const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WishlistPage extends Page {
    /**
     * define selectors using getter methods
     */
    get addedToast() {
        return $('#toast-1-title');
    }

    get removedToast() {
        return $('#toast-2-title');
    }

    get removeFav() {
        return $('svg[id="remove-from-favorite"]');
    }

    get addFav() {
        return $('svg[id="add-to-favorite"]');
    }

    get noFavElement() {
        return $('div[class="chakra-stack css-owjkmg"]');
    }

    get favPageRemoveBtn() {
        return $('#remove-favorite-btn');
    }

    get favPageRemoveToast() {
        return $('.chakra-alert__title');
    }

    get truckerItem() {
        return $('#product-1');
    }

    get productPageToast() {
        return $('.chakra-alert__title');
    }

    get favPagePrice() {
        return $('div[class="chakra-stack css-1ieohnc"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addToFav() {
        //adds first item to favorites
        await this.addFav.scrollIntoView();
        await this.addFav.click();
    }

    async removeFromFav() {
        //removes item from fav
        await this.removeFav.scrollIntoView();
        await this.removeFav.click();
    }

    async addFromProductPage() {
        await this.truckerItem.scrollIntoView();
        await this.truckerItem.click();
        await this.addFav.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('favorites/');
    }
}

module.exports = new WishlistPage();
