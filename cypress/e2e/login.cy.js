describe('Login to application', () => {
    it('Login to Application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('RCV1234')
        cy.get("input[name='password']").type('RCV1234')
        cy.get("input[value='Log In']").click()
        //cy.get('#showOverview > .title').should('have.text', 'Accounts Overview')

        //Log Out from application
        cy.get('li > a[href="logout.htm"]').click()
        cy.get('#leftPanel > h2').should('have.text', 'Customer Login')


    })
})