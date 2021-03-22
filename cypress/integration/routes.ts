import RouterConfig from '../../config/routes';
const { uniq } = require('lodash');

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

const getPaths = (routes) => {
  return uniq(
    routes
      .map((route) => {
        if (route.routes) {
          return [route.path, ...getPaths(route.routes)];
        }
        return route.layout === false ? '' : route.path;
      })
      .flat(100000)
      .filter((path) => !!path),
  );
};

describe('Routes. HomePage', () => {
  it('HomePage', () => {
    cy.visit(BASE_URL);
    cy.setLocalStorage('antd-pro-authority', '["admin"]');
    cy.get('footer').should('be.visible');
  });
});

describe('Routes. Other', () => {
  it('HomePage', () => {
    cy.visit(BASE_URL);
    cy.setLocalStorage('antd-pro-authority', '["admin"]');
    cy.get('footer').should('be.visible');
  });

  const routers = getPaths(RouterConfig);
  routers.forEach((route) => {
    it(`test page ${route}`, () => {
      cy.visit(`${BASE_URL}${route}`);
      cy.setLocalStorage('antd-pro-authority', '["admin"]');
      cy.get('footer').should('be.visible');
    });
  });
});
