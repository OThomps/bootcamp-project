const CheckoutPage = require('../../pageObjects/checkout.page');
const ContactData = require('../../data/contactData');
const TextData = require('../../data/textData');
const ContactPage = require('../../pageObjects/contact.page');


describe('Data driven contact form Validations', () => {
    before(function () {
        browser.maximizeWindow();
        ContactPage.open();
    });

    it('should attempt to complete billing form', async () => {

        for (const record of ContactData) {
            await ContactPage.completeForm(record.firstName, record.lastName, record.email, record.subject, record.message);
            //checking for expected error cases
            if (record.type === "Invalid" || record.type === "Missing") {
                await expect(ContactPage.errors).toBeDisplayed();
                //assert correct error displayed
                if (record.type === "Missing") {
                    await expect(ContactPage.errors).toHaveText(TextData.contactReq);
                } else {
                    await expect(ContactPage.errors).toHaveText(TextData.contactInval);
                }
            } else {
                //successful completion should trigger alert
                await expect(ContactPage.alert).toBeDisplayed();
            }
        }
    })

});