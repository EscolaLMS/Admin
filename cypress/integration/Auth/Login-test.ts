import { LoginCypressPageObject } from './LoginCypressPageObject';

describe('Auth', () => {
  it('Basic functionality of login form', () => {
    const login = new LoginCypressPageObject();
    login
      .navigateToPage()
      .fillCredentials('admin@escola-lms.com', 'secret')
      .clickLoginButton()
      .roleCheck();
  });
});
