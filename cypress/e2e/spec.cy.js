describe("Assessment", () => {
  it("Verify user can launch the App", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    cy.get('input[value="Log In"]').should('be.visible')
  })
})
