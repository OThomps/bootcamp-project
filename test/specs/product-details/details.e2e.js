const DetailsPage = require('../../pageObjects/product-details.page')
const InventoryData = require('../../data/inventoryData')

describe('Add to cart Validations', () => {
    before(function () {
        browser.maximizeWindow();
        //open main page
        DetailsPage.open();
    });

    it('should scroll product image', async () => {
        //click next btn
        await DetailsPage.nextCarousel.click();

        //check that the image has scrolled
        await expect(DetailsPage.carouselStatus).toHaveText('2 of 2');
    })

    it('should check that product name is displayed', async () => {
        //check that name is accurate
        await expect(DetailsPage.productName).toHaveText(InventoryData[0].product);
    })

    it('should add increase item quantity using icon', async () => {
        //click increment icon
        await DetailsPage.iconIncrease.click();

        //check that the image has scrolled
        await expect(DetailsPage.quantityField).toHaveValue('2');
    })
});