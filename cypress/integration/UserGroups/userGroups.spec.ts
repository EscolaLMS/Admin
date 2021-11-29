const BASE_URL = process.env.BASE_URL || `http://localhost:${process.env.PORT || 8000}`;

const hash = Cypress.env('router') === 'hash' ? '#/' : '';

describe('User Groups', () => {
  beforeEach(() => {
    cy.login();
    cy.visit(`${BASE_URL}/${hash}user_groups`);
    cy.fixture('userGroup/item.json').then((item) => {
      this.group = item;
    });
    cy.get('.ant-table-content').get('table > tbody').as('tBody');
  });

  // RENDER
  it('group element is rendering correctly', () => {
    cy.intercept('GET', '/api/admin/user-groups?pageSize=20&current=1&per_page=20&page=1').as(
      'userGroups',
    );
    cy.wait('@userGroups').then((interception) => {
      if (!!interception.response.body.data.length) {
        cy.get('@tBody').find('tr').should('have.length.at.least', 1);
      } else {
        cy.get('@tBody').find('tr').find('div').should('have.class', 'ant-empty');
      }
    });
  });

  // ADD ELEMENT
  it('add group element', () => {
    cy.visit(`${BASE_URL}/${hash}user_groups/new`);
    cy.get('input[id="name"]').clear().type(this.group.name);
    cy.get('#registerable').click();
    cy.intercept('POST', '/admin/user-groups').as('postGroup');
    cy.get('.ant-space-item').find('.ant-btn-primary').click();
    cy.wait('@postGroup').its('response').should('deep.include', {
      statusCode: 201,
    });
    cy.visit(`${BASE_URL}/${hash}user_groups`);

    cy.intercept('GET', '/api/admin/user-groups?pageSize=20&current=1&per_page=20&page=1').as(
      'userGroupsAdd',
    );
    cy.wait('@userGroupsAdd').its('response').should('deep.include', {
      statusCode: 200,
    });
    cy.get('@tBody').find('tr').last().children().eq(1).should('contain', this.group.name);
  });

  // DELETE ELEMENT
  it('delete group element', () => {
    cy.intercept('GET', '/api/admin/user-groups?pageSize=20&current=1&per_page=20&page=1').as(
      'userGroupsDelete',
    );
    cy.wait('@userGroupsDelete').its('response').should('deep.include', {
      statusCode: 200,
    });
    cy.get('@tBody').find('tr').last().children().eq(1).should('contain', this.group.name);
    cy.get('@tBody')
      .find('tr')
      .last()
      .children()
      .eq(5)
      .find('.ant-space')
      .find('.ant-btn-dangerous')
      .click();

    cy.get('.ant-popover-inner').find('.ant-btn-primary').should('contain', 'Yes').click();

    cy.wait(1000);
    cy.get('@tBody').find('tr').last().children().eq(1).should('not.contain.text', this.group.name);
  });
});
