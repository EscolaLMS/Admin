const hash = Cypress.env('router') === 'hash' ? '#/' : '';
console.log(hash, Cypress.env());
describe('Login form', () => {
  it('Basic functionality of login form', () => {
    cy.visit(`http://localhost:8000/${hash}user/login`);
    cy.get('input[id="email"]')
      .clear()
      .type('admin@escola-lms.com')
      .should('have.value', 'admin@escola-lms.com');
    cy.get('input[id="password"]').clear().type('secret').should('have.value', 'secret');
    cy.get('form button').click();
    cy.contains('Welcome');
  });
});
