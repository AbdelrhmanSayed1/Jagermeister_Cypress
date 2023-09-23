export class AgeGateway{

    Day_textBox = '#DD'
    Month_textBox = '#MM'
    Year_textBox = '#YYYY'
    NavBar_Icon='.navbar_burger__W5OHU-'
    Rejection_Message ='.verificationError_headline__h-42s-'
    Language_DropDown='.countryselectorbutton_button__2W2_d- > div'
    Germany_Selection ='.countryselector_countries__feYId- > :nth-child(5)'
    InvalidInput_Message ='.input_errorIcon__24vck-'
    MessageConfirmationLanaguageChanged ='.AgeGate_title__pLVmE'
    addAge(Day,Month,Year){
        cy.get(this.Day_textBox).type(Day)
        cy.get(this.Month_textBox).type(Month)
        cy.get(this.Year_textBox).type(Year)
    }

    changeLang(){
        cy.get(this.Language_DropDown).click()
        cy.get(this.Germany_Selection).click()

    }

  
}