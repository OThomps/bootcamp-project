const LoginPage = require('../../pageObjects/login.page')
const UserData = require('../../data/userData')
const WishlistPage = require('../../pageObjects/wishlist.page')
const TextData = require('../../data/textData')
const ProductData = require('../../data/productData')


describe('Favorites/Wishlist Validations', () => {
    before(function () {
        //sign into site
        browser.maximizeWindow();
        LoginPage.open();
        LoginPage.login(UserData[0].email, UserData[0].password);
    });

    it('should add first item to favorites on products home page', async () => {
        //add item
        WishlistPage.addToFav();
        //assert the alert is displayed and that it is the added message
        await expect(WishlistPage.addedToast).toBeDisplayed();
        await expect(WishlistPage.addedToast).toHaveTextContaining(TextData.favAdded);
    })

    it('should remove item from favorites on product home page', async () => {
        //removes item added above
        WishlistPage.removeFromFav();
        //assert the alert is displayed and that the it is the removed message
        await expect(WishlistPage.removedToast).toBeDisplayed();
        await expect(WishlistPage.removedToast).toHaveTextContaining(TextData.favRemoved);
    })

    it('should add item to favorites from product detail page', async () => {
        //goes to product page and adds item
        await WishlistPage.addFromProductPage();

        //assert the alert is displayed and the page shows no favs
        await expect(WishlistPage.productPageToast).toBeDisplayed();
        await expect(WishlistPage.productPageToast).toHaveTextContaining(TextData.favAdded);
    })

    it('should remove item from favorites from the favorites page', async () => {
        //navigate to favorites page
        await WishlistPage.open();
        //use remove button to remove item from favs
        await WishlistPage.favPageRemoveBtn.click();
        //assert the alert is displayed and that it is the added message
        await expect(WishlistPage.favPageRemoveToast).toBeDisplayed();
        await expect(WishlistPage.favPageRemoveToast).toHaveTextContaining(TextData.favRemoved);
    })

    it('should verify adding to favorites does not change item price', async () => {
        //return to products home to add an item
        await LoginPage.open();
        //add item
        await WishlistPage.addToFav();
        //navigate to favorites page
        await WishlistPage.open();
        //assert that price is still the same as expected
        await expect(WishlistPage.favPagePrice).toHaveTextContaining('$' + ProductData[0].price);
    })

})


