describe('Login form', () => {
  it('Basic functionality of login form', () => {
    cy.visit('http://localhost:8000/user/login');
    cy.get('input[id="username"]').clear().type('admin').should('have.value', 'admin');
    cy.get('input[id="password"]').clear().type('ant.design').should('have.value', 'ant.design');
    cy.get('form button').click();
    cy.contains('Welcome');
  });
});
