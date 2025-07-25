describe('User Login Page', () => {
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })
  
    it('Logs in with valid credentials', () => {
      cy.fixture('userData').then((data) => {
        cy.get('input[name="username"]').type(data.username)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[value="Log In"]').click()
  
        cy.contains('Accounts Overview').should('be.visible')
      })
    })
  })
  