const API_URL = process.env.REACT_APP_API_URL || 'http://localhost';

describe('Swagger Api documentation', () => {
  it('Basic functionality of Api documentation', () => {
    cy.visit(`${API_URL}/api/documentation`);
    cy.title().contains('Escola LMS');
  });
});
