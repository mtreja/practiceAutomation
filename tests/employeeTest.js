var employeePage = {}
var testData = require('../testAssets/EMArray')

var testData2 = [
    {
        name: "imran",
        phone: "1234567890",
        email: "123@gmail.com",
        title: "CEO"
    }
]
module.exports = {
    beforeEach: browser => {
        employeePage = browser.page.employeeObject()
        employeePage.navigate()
    },
    after: browser => {
        employeePage.end()
    },
    "searchTest": browser => {
        testData.forEach(edit => {
            employeePage.manager(edit)
        })
    },
    "searchTest2": browser => {
        employeePage.addName(testData2[0])
    }
}