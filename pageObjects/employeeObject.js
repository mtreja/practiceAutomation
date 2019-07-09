var employeeMethod = {
    manager: function (look) {
        this
            .expect.element("@logo").text.to.equal("No Employee Selected")
        this
            .waitForElementVisible("@search", 50000)
            .setValue("@search", look.employee)
            .click("@tawfique")
            .clearValue("@name")
            .setValue("@name", look.name)
            .clearValue("@phone")
            .setValue("@phone", look.phone)
            .clearValue("@email")
            .setValue("@email", look.email)
            .clearValue("@title")
            .setValue("@title", look.title)
            .click("@save")
        return this

    },
    addName: function (look) {
        this
            .click("@addEmployee")
            .click("@newEmployee")
            .clearValue("@name")
            .setValue("@name", look.name)
            .clearValue("@phone")
            .setValue("@phone", look.phone)
            .clearValue("@email")
            .setValue("@email", look.email)
            .clearValue("@title")
            .setValue("@title", look.title)
            .click('[name="delete"]')
            return this
    }

}
module.exports = {
    url: "https://devmountain-qa.github.io/employee-manager-v2/build/index.html",
    commands: [employeeMethod],
    elements: {
        logo: '#noEmployee',
        search: '[name="searchBox"]',
        clear: '[name="clearSearch"]',
        tawfique: '[name="employee19659"]',
        name: '[name="nameEntry"]',
        phone: '[name="phoneEntry"]',
        email: '[name="emailEntry"]',
        title: '[name="titleEntry"]',
        save: '[name="save"]',
        delete: '[name="delete"]',
        addEmployee: '[name="addEmployee"]',
        newEmployee: {
            selector: '//*[text()="New Employee"]',
            locateStrategy: "xpath"
        }

    }




}