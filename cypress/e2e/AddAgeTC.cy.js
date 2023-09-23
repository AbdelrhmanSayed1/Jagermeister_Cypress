import {AgeGateway} from "./pages/Age_Form"

beforeEach(function () {
    // executes prior each test within it block
    cy.visit('https://de.jagermeister.com/')
})



describe('Adding Adult Age', function () {
    
    let AgeFillerObj = new AgeGateway()
    it('AddAdultAge', function() {
        AgeFillerObj.addAge(4,4,2000)
        cy.get(AgeFillerObj.NavBar_Icon).should('be.visible')

    })

    it('ChangeLangToGremany', function() {
        AgeFillerObj.changeLang()
    })


})