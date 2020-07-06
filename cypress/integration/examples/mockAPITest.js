/// <reference types="Cypress" />

describe('API mock test', () => {
  it('should return an error message', function () {
    cy.visit('https://example.cypress.io/commands/network-requests');
    cy.server();

    // route method use for API + FE testing
    cy.route({
      method: 'PUT',
      url: '/comments/*',
      status: 404,
      response: {
        error: 'No comment found',
      },
      delay: 1000,
    }).as('updateComment');

    cy.get('.network-put').click();
    cy.wait('@updateComment');
    cy.get('.network-put-comment').should('contain', 'No comment found');
  });
});
