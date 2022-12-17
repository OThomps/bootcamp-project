const LoginPage = require('../../pageObjects/login.page')
const UserData = require('../../data/userData')

describe('Login Validations', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(UserData[0].email, UserData[0].password);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
    })
})


