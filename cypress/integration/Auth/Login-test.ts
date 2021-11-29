import { LoginCypressObject } from './LoginCypressObject';

describe('Auth', () => {
  it('Basic functionality of login form', () => {
    const login = new LoginCypressObject();
    login
      .navigateToPage()
      .fillCredentials('admin@escola-lms.com', 'secret')
      .clickLoginButton()
      .roleCheck();
  });
});
