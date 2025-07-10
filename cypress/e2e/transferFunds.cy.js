describe('Transfer Between two Accounts', () => {
    beforeEach(() => {
      cy.login()
    })
  
    it('Transfers money from one account to another', () => {
      cy.fixture('userData').then((data) => {
        cy.contains('Transfer Funds').click()
        cy.get('#amount').type(data.transferAmount)
        cy.get('select#fromAccountId').select(0)
        cy.get('select#toAccountId').select(1)
        cy.get('input[type="submit"]').click()
        cy.contains('Transfer Complete!').should('be.visible')
      })
    })
  })
  