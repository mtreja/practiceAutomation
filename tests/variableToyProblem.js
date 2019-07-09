module.exports = {
    after: browser => {
        browser.end()
    },
    'Selectors': browser => {
        var searchBar = '.enter-location__input'
        var submitButton = '.enter-location__submit'
        var resultingCity = '.current-weather__location'
        var city = 'Park Ridge'
        var zipCode= '60068'

        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .setValue(searchBar, zipCode)
            .click(submitButton)
            .waitForElementVisible(resultingCity)
            .verify.containsText(resultingCity, city)
    },
    'Test data': browser => {
        var newEmployeeName = 'jake'
        var newEmployeePhone = '1234567890'
        var newEmployeeTitle = 'CEO'
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('li[name="addEmployee"]')
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', newEmployeeName)
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', newEmployeePhone)
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', newEmployeeTitle)
            .click('#saveBtn')
            .click('li[name="employee1"]')
            .expect.element('input[name="nameEntry"]').value.not.to.equal(newEmployeeName)
        browser
            .click('li[name="employee11"]')
            .expect.element('input[name="nameEntry"]').value.to.equal(newEmployeeName)
        browser.expect.element('input[name="phoneEntry"]').value.to.equal(newEmployeePhone)
        browser.expect.element('input[name="titleEntry"]').value.to.equal(newEmployeeTitle)
    }
}