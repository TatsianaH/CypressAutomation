/// <reference types="Cypress" />

describe('API test', function () {
  it('should', function () {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
      name: 'Notebook',
      isbn: 'abcmd',
      aisle: '1000',
      author: 'Nocolas Sparks',
    }).then(function (response) {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('Msg', 'successfully added');
    });
  });
});
