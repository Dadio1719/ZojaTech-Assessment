describe("User Registration", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
  });

  it("To Register a new user", () => {
    cy.fixture("userData").then((data) => {
      cy.get("#customer\\.firstName").type(data.firstName);
      cy.get("#customer\\.lastName").type(data.lastName);
      cy.get("#customer\\.address\\.street").type(data.address);
      cy.get("#customer\\.address\\.city").type(data.city);
      cy.get("#customer\\.address\\.state").type(data.state);
      cy.get("#customer\\.address\\.zipCode").type(data.zipCode);
      cy.get("#customer\\.phoneNumber").type(data.phone);
      cy.get("#customer\\.ssn").type(data.ssn);
      cy.get("#customer\\.username").type(data.username);
      cy.get("#customer\\.password").type(data.password);
      cy.get("#repeatedPassword").type(data.password);
      cy.get('[colspan="2"] > .button').click();
      cy.contains("Your account was created successfully.").should(
        "be.visible"
      );
      cy.contains("Welcome").should("be.visible");
    });
  });
});
