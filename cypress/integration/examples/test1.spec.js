/// <reference types="Cypress" />

describe('My First Test', () => {
  it('should open a home page', () => {
    cy.visit('http://localhost:3006/');
  });

  it('should click Register button', () => {
    cy.get('.btn').click();
    cy.url().should('eq', 'http://localhost:3006/user/register');
  });

  it('should click Register button', () => {
    cy.get('[name="firstName"]').should('have.length', 1);
    //cy.get('h1').eq
  });
});
