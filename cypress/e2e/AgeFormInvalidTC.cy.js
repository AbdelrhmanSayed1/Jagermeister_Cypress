import {AgeGateway} from "./pages/Age_Form"

beforeEach(function () {
    // executes prior each test within it block
    cy.visit('https://www.jagermeister.com/en-GB/home')
})



describe('Younge Age', function () {
    
    let AgeFillerObj = new AgeGateway()
    it('AddYoungeAge', function() {
        AgeFillerObj.addAge(4,4,2006)
        cy.get(AgeFillerObj.Rejection_Message).should('be.visible')

    })  

    it('Add0Day', function() {
        AgeFillerObj.addAge(0,0,0)
        cy.get(AgeFillerObj.InvalidInput_Message).should('be.visible')

    })

    it('AddFutuerDate', function() {
        AgeFillerObj.addAge(1,1,2029)
        cy.get(AgeFillerObj.Rejection_Message).should('be.visible')

    })
/*//Test case contains a BUG cause of Day = 100
    it('AddInvalidMonth', function() {
        AgeFillerObj.addAge(1,15,2000)
        cy.get(AgeFillerObj.InvalidInput_Message).should('be.visible')

    })*/
    //Test case contains a BUG cause of Day = 100

    it('AddInvalidDay', function() {
        AgeFillerObj.addAge(100,15,2000)
        cy.get(AgeFillerObj.InvalidInput_Message).should('be.visible')

    })



})