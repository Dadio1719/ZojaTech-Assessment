describe('Create Savings Account', () => {
    beforeEach(() => {
      cy.login() // Custom command, see below
    })
  
    it('Creates a new savings account', () => {
      cy.contains('Open New Account').click()
      cy.get('#type').select('SAVINGS')
      cy.get('input[type="submit"]').click()
      cy.contains('Account Opened!').should('be.visible')
    })
  })
  