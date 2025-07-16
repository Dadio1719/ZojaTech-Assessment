describe("Create Savings Account", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Creates a new savings account", () => {
    // Navigate to Open New Account
    cy.fixture("userData").then((data) => {
      cy.get("#leftPanel > ul > :nth-child(1) > a").click();
      cy.contains("Open New Account").should("be.visible");

      // Verify account creation form is visible
      cy.contains("What type of Account would you like to open").should(
        "be.visible"
      );

      // Select existing account (fromAccountId must be selected before submit)
      cy.get("#fromAccountId").should("exist").select(0);

      // Submit the form
      cy.get("form > div > .button").click();

      // Confirm success
      cy.contains("Account Opened!").should("be.visible");
    });
  });
});
