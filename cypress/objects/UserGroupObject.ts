const BASE_URL = process.env.BASE_URL || `http://localhost:${process.env.PORT || 8000}`;
const hash = Cypress.env('router') === 'hash' ? '#/' : '';

export const selectors = {
  tableWrapper: '.ant-table-content',
  tableBody: 'table > tbody',
  newCategoryNameInput: 'input[id="name"]',
  registerableSwitch: '#registerable',
  createNewButton: '.ant-space-item .ant-btn-primary',
  deleteButton: '.ant-space .ant-btn-dangerous',
  popupDeleteConfirm: '.ant-popover-inner .ant-btn-primary',
};

export const endpoints = {
  list: '/api/admin/user-groups?pageSize=20&current=1&per_page=20&page=1',
  post: '/admin/user-groups',
};

export class UserGroupObject {
  constructor(name?: string) {
    this.objMockName = name;
  }

  navigateToPage(url: string) {
    cy.visit(`${BASE_URL}/${hash}${url}`);
    return this;
  }

  assertTable() {
    cy.get(selectors.tableWrapper).get(selectors.tableBody).as('tBody');
    return this;
  }

  getList() {
    cy.intercept('GET', endpoints.list).as('userGroups');
    return this;
  }

  createNewGroup() {
    cy.get(selectors.newCategoryNameInput).clear().type(this.objMockName);
    cy.get(selectors.registerableSwitch).click();
    cy.intercept('POST', endpoints.post).as('postGroup');
    cy.get(selectors.createNewButton).click();
    cy.wait('@postGroup');
    this.navigateToPage('user_groups');
    return this;
  }

  listShouldBe(full: boolean) {
    if (full) {
      cy.get('@tBody').find('tr').should('have.length.at.least', 1);
    } else {
      cy.get('@tBody').find('tr').find('div').should('have.class', 'ant-empty');
    }

    return this;
  }

  itemShouldExist() {
    cy.get('@tBody').children().should('contain', this.objMockName);
    return this;
  }

  itemShouldNotExist() {
    cy.get('@tBody').children().should('not.contain', this.objMockName);
    return this;
  }

  clickDeleteButton() {
    cy.get('@tBody')
      .contains(this.objMockName)
      .parent('tr')
      .within(() => {
        cy.get('td').get(selectors.deleteButton).click();
      });
    return this;
  }

  confirmDelete() {
    cy.get(selectors.popupDeleteConfirm).should('contain', 'Yes').click();
    return this;
  }
}
