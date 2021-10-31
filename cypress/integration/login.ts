const BASE_URL = process.env.BASE_URL || `http://localhost:${process.env.PORT || 8000}`;

const hash = Cypress.env('router') === 'hash' ? '#/' : '';
console.log(hash, Cypress.env());
describe('Login form', () => {
  it('Basic functionality of login form', () => {
    cy.visit(`${BASE_URL}/${hash}user/login`);
    cy.get('input[id="email"]')
      .clear()
      .type('admin@escola-lms.com')
      .should('have.value', 'admin@escola-lms.com');
    cy.get('input[id="password"]').clear().type('secret').should('have.value', 'secret');
    cy.intercept('POST', '/auth/login').as('postLogin');
    cy.get('form button').click();
    cy.wait('@postLogin');
    cy.get('ul[role=menu]').should('be.visible');
  });
});
