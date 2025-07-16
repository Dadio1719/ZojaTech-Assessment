Cypress.Commands.add("login", () => {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  cy.fixture("userData").then((data) => {
    cy.get('input[name="username"]').type(data.username);
    cy.get('input[name="password"]').type(data.password);
    cy.get('input[type="submit"]').click();
  });
});
