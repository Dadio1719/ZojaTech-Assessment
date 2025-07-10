describe('User Registration', () => {
    beforeEach(() => {
      cy.visit('/register.htm')
    })
  
    it('Verify user can Registers a new customer', () => {
      cy.fixture('userData').then((data) => {
        cy.get('#customer\\.firstName').type(data.firstName)
        cy.get('#customer\\.lastName').type(data.lastName)
        cy.get('#customer\\.address\\.street').type(data.address)
        cy.get('#customer\\.phoneNumber').type(data.phone)
        cy.get('#customer\\.username').type(data.username)
        cy.get('#customer\\.password').type(data.password)
        cy.get('#repeatedPassword').type(data.password)
        cy.get('input[type="submit"]').click()
  
        cy.contains('Registration successfully.').should('be.visible')
      })
    })
  })
  