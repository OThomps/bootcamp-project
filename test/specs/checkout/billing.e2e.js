const CheckoutPage = require('../../pageObjects/checkout.page');
const BillingData = require('../../data/billingData');
const TextData = require('../../data/textData');
const AddToCart = require('../../pageObjects/addToCart.page');


describe('Data driven billing form Validations', () => {
    before(function () {
        browser.maximizeWindow();
        //open main page
        //AddToCart.open();
        AddToCart.addSingle();
    });

    it('should attempt to complete billing form', async () => {

        for (const record of BillingData) {
            await CheckoutPage.open();
            await CheckoutPage.completeBilling(record.name, record.email, record.street, record.apt, record.city, record.zip);
            //checking for expected error cases
            if (record.name === "Invalid Form" || record.name === "Missing Required") {
                await expect(CheckoutPage.errors).toBeDisplayed();
                //assert correct error displayed
                if (record.name === "Missing Required") {
                    await expect(CheckoutPage.errors).toHaveText(TextData.billingRequired);
                } else {
                    await expect(CheckoutPage.errors).toHaveText(TextData.billingInvalid);
                }
            } else {
                //successful completion should trigger payment section to show
                await expect(CheckoutPage.orderBtn).toBeDisplayed();
            }
        }
    })

});