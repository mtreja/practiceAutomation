
module.exports = {
    before: browser => {
        browser.url('http://localhost:3000')
            .getAlertText(function (text) {
                browser.verify.ok(text.value == "Please enter your name")
            })
    },
    'Check the entered name': function (browser) {
        browser
            .setAlertText("tawfique")
            .acceptAlert()
            .useXpath()
            .expect.element("//*[@class='App-header']/h2[1]").text.to.equal("Welcome to tawfique's Bookshelf")
        browser
            .useCss()
    },
    'Cancel works right': browser => {
        browser
            .dismissAlert()
            .getAlertText(function (text) {
                browser.verify.ok(text.value == "Please enter your name")
            })

    },
    'Does not acceept blank entries': browser => {
        

    }
}