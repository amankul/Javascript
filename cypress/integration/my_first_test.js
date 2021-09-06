///  <reference types = "cypress" />

// it('google test', function() {

//     cy.visit('https://www.google.com')

//     // . means class , # id or [name="q"]
//     cy.get('.gLFyf').type('Milan{Enter}')  

//     // contains given text
//     cy.contains('Milan expensive', { timeout: 4000 }).click()
    
//     // non-existing element  should fail after timeout
// })

// it.only('login test', function () {

//     cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/auth/login')
//     cy.get('#btnLogin').click()
//     cy.get('#menu_recruitment_viewRecruitmentModule > :nth-child(1) > .left-menu-title').click()
//     cy.get('#menu_recruitment_viewCandidates > .left-menu-title').click()
//     //find descendent element
//     cy.get('.row content').find('#addItemBtn').click()

// })



it('assertions', function() {

    cy.visit('https://example.cypress.io')

    cy.contains('get').click()
    
    //implicit assertion are inbuilt and work with get/contains
    // should have works with locators like class, name, html etc
    // be can check if enabled, focussed, selected etc
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .and('be.visible')

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')
    
    //explicit assertions referred separately and will not show in command log if pass
    // equal, true/false, string, null, exists
    let name = 'Amit'
    expect(name).to.be.equal('Amit')

    assert.strictEqual(4, '4', "check type")
        
})