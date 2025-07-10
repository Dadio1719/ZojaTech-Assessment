describe('Request Loan', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Submits a loan application', () => {
    cy.contains('Request Loan').click()
    cy.get('#amount').type('500')
    cy.get('select#fromAccountId').select(0)
    cy.get('input[type="submit"]').click()

    cy.contains('Loan Request Processed').should('be.visible')
  })
})
