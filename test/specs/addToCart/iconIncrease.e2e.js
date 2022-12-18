const AddToPage = require('../../pageObjects/addToCart')

describe('Add to cart Validations', () => {
    before(function () {
        browser.maximizeWindow();
        //open main page
        AddToPage.open();
    });

    it('should increase quantity using icon', async () => {
        //click increase icon
        await AddToPage.prodIconIncrease.click();

        //check that the count has increased
        await expect(AddToPage.quantityInput).toHaveValue('2')
    })
});