describe('Logout', () => {
    beforeEach(() => {
      cy.login()
    })
  
    it('Logs the user out successfully', () => {
      cy.contains('Log Out').click()
      cy.contains('Customer Login').should('be.visible')
    })
  })
  