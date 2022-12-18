const InventoryData = require('../../data/inventoryData')
const AddToPage = require('../../pageObjects/addToCart.page')

describe('Add to cart Validations', () => {
    before(function () {
        browser.maximizeWindow();
        //open main page
        AddToPage.open();
    });

    it('should add a single item to cart', async () => {
        await AddToPage.addSingle();
        //check that cart summary has popped out
        await expect(AddToPage.cartSummaryTitle).toBeDisplayed();
        //check that the item selected was the one added
        await expect(AddToPage.cartItemTitle).toHaveText(InventoryData[0].product)

    });

})


