const AddToPage = require('../../pageObjects/addToCart')

describe('Add to cart Validations', () => {
    before(function () {
        browser.maximizeWindow();
        //open main page
        AddToPage.open();
    });

    it('should not add a item with a surplus quantity (more than 20)', async () => {
        //try to add 50 counts of an item
        await AddToPage.addSurplus();
        //check that cart summary has popped out
        await expect(AddToPage.cartSummaryTitle).toBeDisplayed();
        //check that amount added was not more than 20
        await expect(AddToPage.cartItemQuantity).toHaveText('20');

    });

});


