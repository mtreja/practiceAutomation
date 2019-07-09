// var hlwCommand={
//     homeloan: function ( array, propertyType, yesNo, goodFair, bankruptcyForeclosure, sendStart  ){
//     this
//         .waitForElementPresent("@homeLogo", 5000)
//         .verify.containsText("@homeLogo", "Home Loan Wizard")
//         .click("@getStarted")
//         .expect.element('[name="promptText1"]').text.to.equal("What type of loan will you be needing?")
//     this
//         .click(array.loan)
//         .click(array.property)
//         .click('[name="nextButton"]')
//         .setValue('@propertyCity', array.city)
//         .click('[name="nextButton"]')
//         .click(propertyType)
//         .click(yesNo)
//         .click(yesNo)
//         .setValue("@estimatedPrice", array.purchasePrice)
//         .setValue("@downPayment", array.downPayment)
//         .click('[name="nextButton"]')
//         .click(goodFair)
//         .click(bankruptcyForeclosure)
//         .setValue("@streetAdress", array.streetAdress)
//         .setValue("@city", array.city)
//         .click("@next")
//         .setValue("@firstName", array.first)
//         .setValue("@lastName", array.last)
//         .click("@next")
//         .click(sendStart)
//         return this
// }


// module.exports = {
//     url: "http://localhost:3000/#/",
//     commands:[hlwCommand],
//     elements: {
//         homeLogo: '[class="home-text"]',
//         getStarted: '.home-btn',
//         loanType: '#loanTypes',
//         loanTypeHome: '#loanTypes [value="Home Purchase"]',
//         loanTypeRefinance: '#loanTypes [value="Refinance"]',
//         loanTypeHomeEquity: '#loanTypes [value="Home Equity"]',
//         loanTypeLogo: '[name="promptText1"]',
//         propertyType: '#propertyTypes',
//         propertyTypeSingle: '#propertyTypes [value="Single Family Home"]',
//         propertyTypeTownHome: '#propertyTypes [value="Town Home"]',
//         propertyTypeCondo: '#propertyTypes [value="Town Home"]',
//         propertyTypeMulti: '#propertyTypes [value="Multi Family Dwelling"]',
//         propertyTypeMobile: '#propertyTypes [value="Mobile Home"]',
//         propertyCityLogo:'[name="promptText"]',
//         propertyCity: '[name="city"]',
//         primaryHome: '[value="Primary Home"]',
//         rentalProperty: '[value="Rental Property"]',
//         secondaryHome: '[value="Secondary Home"]',
//         yesButton: '[name="yesButton"]',
//         noButton: '[name="noButton"]',
//         estimatedPrice: '[name="price"]',
//         downPayment: '[name="down"]',
//         excellent: '[value="excellent"]',
//         good: '[value="good"]',
//         fair: '[value="fair"]',
//         poor: '[value="poor"]',
//         noBankfore: '[value="Has never been in bankruptcy"]',
//         bankruptcy: '[value="Has had bankruptcy before"]',
//         foreclosure: '[value="Has had a foreclosure before"]',
//         both: '[value="Has had both a foreclosure and a bankruptcy"]',
//         streetAdress: '#addressOne',
//         city: '#addressThree',  
//         firstName: '#first',
//         lastName: '#last',
//         next: '[name="nextButton"]',
//     }
// }
// }