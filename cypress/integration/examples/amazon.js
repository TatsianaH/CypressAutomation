/// <reference types="Cypress" />

describe('', () => {
  before('', () => {
    cy.visit('https://www.amazon.com/');
  });

  it('open', () => {
    cy.get('#nav-link-accountList').invoke('show');
    cy.wait(2000);
    cy.contains('Garage').click({ force: true });
    const title = cy.title();
    cy.title().should('eq', 'Your Garage: Automotive: Amazon.com');
  });
});
