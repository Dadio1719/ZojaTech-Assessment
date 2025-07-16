describe("Request Loan", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Submits a loan application successfully", () => {
    cy.contains("Request Loan").click();
    cy.contains("Apply for a Loan").should("be.visible");

    // Verify user can Fill the form
    cy.get('input[id="amount"]').type("1000");
    cy.get('input[id="downPayment"]').type("100");
    cy.get('select[id="fromAccountId"]').should("exist").select(0);

    cy.get('[colspan="2"] > .button').click();

    // Verify success message for loan request
    cy.contains("Loan Request Processed").should("be.visible");
  });
});
