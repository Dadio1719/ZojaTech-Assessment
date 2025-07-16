describe("Logout", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Verify the user Logs out successfully", () => {
    cy.contains("Log Out").click();
    cy.contains("Customer Login").should("be.visible");
  });
});
