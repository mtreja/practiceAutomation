// var hlwPage = {}

// var testData = [
//     {
//         loan: '@loanTypeRefinance',
//         property: '@propertyTypeSingle',
//         city: 'New York',
//         purchasePrice: '3000',
//         downPayment: '100',
//         streetAdress: "159-24",
//         city: "queens",
//         first: "sam",
//         last: "killer"


//     },
//     {
//         loan: '@loanTypeHomeEquity',
//         property: '@propertyTypeMulti',
//         city: 'Provo',
//         purchasePrice: "4000",
//         downPayment: "1000",
//         streetAdress: "145665",
//         city:"brooklyn",
//         first: "braine",
//         last: "chatry"

//     }
// ]
// module.exports = {
//     beforeEach: browser => {
//         hlwPage = browser.page.hlw()
//         hlwPage.navigate()
//     },
//     after: browser => {
//         hlwPage.end()
//     },
//     'Test': browser => {
//         homeloan(hlwPage, testData[0], "@primaryHome", "@yesButton", "@good", "@noBankfore", '[name="sendButton"]')
//     },
//     'Practice': browser => {
//         homeloan(hlwPage, testData[1], "@secondaryHome", "@noButton", "@fair", "@bankruptcy", '[name="restartButton"]')
//     }
// }





