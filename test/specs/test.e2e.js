import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
       const usernames = ['standard_user', 'problem_user', 'error_user', 'visual_user'];

        await LoginPage.login(usernames[0], LoginPage.password1)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText('Swag Labs')
        await browser.url('https://www.saucedemo.com')
        for (const username of usernames) {
            await LoginPage.login(username, LoginPage.password1)
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveText('Swag Labs')
            await browser.url('https://www.saucedemo.com')
        }    
    })
})

