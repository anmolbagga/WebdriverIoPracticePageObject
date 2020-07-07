const internetPage = require("../pages/internet.page")

describe("Interacting with elements", function () {
    it("Get text for element", () => {
        browser.url('/')
        let text = $("h2").getText()
        console.log("The text is "+text)
    })
    it("Get more text for element", () => {
        console.log("This is an example of how page object model works")
        internetPage.getLiText()
        internetPage.getSpecificElementText(3)
    })
    it("Is footer Displayed", () => {
        console.log(internetPage.pageFooter.isDisplayed())
    })
}) 