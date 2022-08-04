import { LoginCypressObject } from '../../objects/LoginCypressObject';

describe('Auth', () => {
  it('Basic functionality of login form', () => {
    const login = new LoginCypressObject();
    login
      .navigateToPage()
      .fillCredentials('admin@escolalms.com', 'secret')
      .clickLoginButton()
      .roleCheck();
  });
});
