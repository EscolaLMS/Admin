const BASE_URL = process.env.BASE_URL || `http://localhost:${process.env.PORT || 8000}`;
const hash = Cypress.env('router') === 'hash' ? '#/' : '';

export const selectors = {
  inputLoginEmail: 'input[id="email"]',
  inputLoginPassword: 'input[id="password"]',
  btnLogin: 'form button',
};

export class LoginCypressPageObject {
  navigateToPage() {
    cy.visit(`${BASE_URL}/${hash}user/login`);
    return this;
  }

  fillCredentials(username: string, password: string) {
    cy.get(selectors.inputLoginEmail).clear().type(username);
    cy.get(selectors.inputLoginPassword).clear().type(password);
    return this;
  }

  clickLoginButton() {
    cy.get(selectors.btnLogin).click();
    return this;
  }

  roleCheck() {
    cy.get('ul[role=menu]').should('be.visible');
    return this;
  }
}
