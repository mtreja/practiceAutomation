var yoodlizePage = {}
module.exports = {
    beforeEach: browser => {
        yoodlizePage = browser.page.yoodlize()
        yoodlizePage.navigate()

    },
    after: browser => {
        yoodlizePage.end()
    },
    "See All": browser => {
        yoodlizePage
            .click("elements.seeAll")
            .waitForElementPresent("@verify", 5000)
            .verify.containsText("@verify", 'category: Tools')
            .api.back()
        yoodlizePage
            .api.pause(2000)
        //yoodlizePage
            //.click("@seeAll2")
            //.waitForElementPresent("@verify2", 5000)
            //.verify.containsText("@verify2,", "Listings")
        // // .api.back()
    }
}




// var weatherPage ={}
// module.exports = {
//     beforeEach: browser => {
//         weatherPage = browser.page.weatherman()
//         weatherPage.navigate()



