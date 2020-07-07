const internetPage = require("../pages/internet.page")

describe(' Test element actions', function () {
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        browser.pause(1000)
        expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/abtest')
    })
    it('should get Text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })
    it('should click checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    })
    it('should uncheck checkbox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    })
    it('should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        browser.pause(1000)
        internetPage.enterUsername("anmol")
        browser.pause(1000)
        assert.equal("anmol", internetPage.username.getValue())
        browser.pause(1000)
    })
    it('should enter password', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterPassword("password")
        assert.equal("password", internetPage.password.getValue())
    })

    it('should clear Value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.equal('', internetPage.username.getValue())
    })

})