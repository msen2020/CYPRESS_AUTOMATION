/* contains 
input method
click
assertion text
*/

describe('Registration functionality', () => {
  it('Register the user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('a[href^="register.htm"]').click()
    cy.get("input[id='customer.firstName']").type('Lacy')
    cy.get("input[id='customer.lastName']").type('Academy')
    cy.get("input[id='customer.address.street']").type('Seville')
    cy.get("input[id='customer.address.city']").type('Seville')
    cy.get("input[id='customer.address.state']").type('Seville')
    cy.get("input[id='customer.address.zipCode']").type('41000')
    cy.get("input[id='customer.phoneNumber']").type('747414114')
    cy.get("input[id='customer.ssn']").type('1234567')
    cy.get("input[id='customer.username']").type('RCV1234')
    cy.get("input[id='customer.password']").type('RCV1234')
    cy.get('#repeatedPassword').type('RCV1234')
    cy.get('[colspan="2"] > .button').click()
    cy.get("span[id='customer.username.errors']").contains('This username already exists.')
    cy.get("span[id='customer.username.errors']").should('have.text', 'This username already exists.')

  })

})

