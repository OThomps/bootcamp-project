const LoginPage = require('../../pageObjects/login.page')
const LoginData = require('../../data/loginData')
const TextData = require('../../data/textData')

describe('Login Validations', () => {
    //data driven login covering invalid logins and valid login

    it('should attempt to login using data store', async () => {
        for (const record of LoginData) {
            await LoginPage.open(); //opening the page
            //attempt to login
            await LoginPage.login(record.email, record.password);
            //check to see if user will throw an error
            if (record.name === "no_email" || record.name === "no_pwd") {
                //check that error is displayed
                await expect(LoginPage.errors).toBeDisplayed();
                //check to see which error message should be displayed
                if (record.name === "no_email") {
                    await expect(LoginPage.errors).toHaveText(TextData.authEmailBlank);
                } else {
                    await expect(LoginPage.errors).toHaveText(TextData.authPasswordBlank);
                }
            } else {
                //default user should login to products home page
                await expect(browser).toHaveUrl(record.expectedUrl);
            }
        }
    });

})


