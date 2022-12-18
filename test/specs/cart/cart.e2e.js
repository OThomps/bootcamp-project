const CartPage = require('../../pageObjects/cart.page');
const AddCart = require('../../pageObjects/addToCart.page');

describe('Cart Validations', () => {
    before(function () {
        browser.maximizeWindow();
        //add item to cart for tests below
        AddCart.open();
        AddCart.addSingle();
    });

    it('should increase item quantity', async () => {
        //navigate to cart
        //await CartPage.open();
        await CartPage.incrementQuantity.click();
        //check that the item selected was the one added
        await expect(CartPage.quantity).toHaveText('2');
    });

});


