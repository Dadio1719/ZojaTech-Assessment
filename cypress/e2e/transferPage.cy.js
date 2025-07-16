describe("Transfer Between Accounts", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Transfersbetween two accounts", () => {
    cy.fixture("userData").then((data) => {
      cy.contains("#leftPanel > ul > :nth-child(3) > a").click();
      cy.get("#amount").type(data.transferAmount);
      cy.get("#fromAccountId").select(0);
      cy.get("#toAccountId").select(1);
      cy.get(":nth-child(4) > .button").click();
      cy.contains("Transfer Complete!").should("be.visible");
    });
  });
});
