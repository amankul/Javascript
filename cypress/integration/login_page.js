export class LoginPage {

    loginpage_username = '#uname'
    loginpage_password = '#pwd'
    loginpage_submit = '[type="submit"]'
    loginpage_header = 'h2'


    navigate(url) {
        cy.visit(url)
    
    }

    enterUser(username) {
        cy.get(this.loginpage_username).type(username)

    }

    enterPass(password) {
        cy.get(this.loginpage_password).type(password)

    }

    clickLogin() {
        cy.get(this.loginpage_submit).click()

    }

    checkHeading(header) {
        cy.get(this.loginpage_header).should('contain',header)

    }

    getTitle() {
        return cy.getTitle()

    }

}