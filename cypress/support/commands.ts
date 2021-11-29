// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-localstorage-commands';
import { LoginCypressPageObject } from '../integration/Auth/loginCypressPageObject';

// const API_URL = process.env.REACT_APP_API_URL || 'https://api-stage.escolalms.com';

Cypress.Commands.add('login', () => {
  //   TODO: change to request login in future
  // cy.visit(`${BASE_URL}/${hash}user/login`);
  // cy.request('POST', `${API_URL}/api/auth/login`, {
  //   autoLogin: true,
  //   email: 'admin@escola-lms.com',
  //   password: 'secret',
  // })
  //   .its('body')
  //   .then((body) => {
  //     cy.setLocalStorage('TOKEN', body.data.token);
  //   });
  // cy.getLocalStorage('TOKEN').should('exist');
  const login = new LoginCypressPageObject();
  login
    .navigateToPage()
    .fillCredentials('admin@escola-lms.com', 'secret')
    .clickLoginButton()
    .roleCheck();
});
