const GalleryPage = require('../../pageObjects/productGallery.page')
const InventoryData = require('../../data/inventoryData')

describe('Product Gallery Validations', () => {
    before(function () {
        browser.maximizeWindow();
        //open main page
        GalleryPage.open();
    });

    it.only('should check if each item has a name', async () => {
        //store all item in a variable
        const list = await GalleryPage.allItems;
        //loop through items for product name
        await list.forEach((item, index) => {
            const product = $(item).$("p[class='chakra-text css-1n64n71']");
            const currentItem = InventoryData[index];
            expect(product).toHaveTextContaining(currentItem.product);
        });
    });

    it('should check if each item has a price', async () => {
        //store all item in a variable
        const list = await GalleryPage.allItems;
        //loop through items for product price
        await list.forEach((item, index) => {
            expect(item).toHaveTextContaining('$' + InventoryData[index].price);
        })
    });

    it('should check if each item has a label', async () => {
        //store all item in a variable
        const list = await GalleryPage.allItems;
        //loop through items for product label
        await list.forEach((item, index) => {
            expect(item).toHaveTextContaining(InventoryData[index].label);
        })
    });



});


