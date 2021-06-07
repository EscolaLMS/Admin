describe('Login form', () => {
  it('Basic functionality of login form', () => {
    cy.visit('http://localhost:8000/user/login');
    cy.get('input[id="email"]')
      .clear()
      .type('admin@escola-lms.com')
      .should('have.value', 'admin@escola-lms.com');
    cy.get('input[id="password"]').clear().type('secret').should('have.value', 'secret');
    cy.get('form button').click();
    cy.contains('Welcome');
  });
});
