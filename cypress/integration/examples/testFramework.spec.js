/// <reference types="Cypress" />
describe('Test', () => {
  // beforeEach(function () {
  //     // "this" points at the test context object
  //     cy.fixture('user')
  //       .then((user) => {
  //         // "this" is still the test context object
  //         this.user = user
  //       })
  //   })

  before(function () {
    cy.fixture('example').then((d) => {
      this.data = d;
    });
  });

  it('should fill and check all fields on the page', function () {
    cy.visit(Cypress.env('homeUrl'));
    cy.get('.form-group input[name="name"]').should('have.attr', 'minlength', '2');
    cy.get('.form-group input[name="name"]').type(this.data.name);
    cy.get('.form-group input[name="name"]').should('have.value', this.data.name);
    cy.get('h4 input[name="name"]').should('have.value', this.data.name);
    cy.get('input[name="email"]').type(this.data.email);
    cy.get('#exampleInputPassword1').type('123456');
    cy.get('#exampleCheck1').check();
    cy.get('#exampleCheck1').should('be.checked');
    cy.get('#exampleFormControlSelect1').select(this.data.gender);
    cy.get('#inlineRadio3').should('be.disabled');
    cy.get('#inlineRadio2').should('be.not.checked');
    cy.get('#inlineRadio2').check();
    cy.get('#inlineRadio2').should('be.checked');
    cy.get('input[name="bday"]').type('2020-06-24');
    cy.get('.btn.btn-success').click();
    // cy.on('windows:alert', (str) => {
    //     expect(str).to.be.equal(
    //       'Success! The Form has been submitted successfully!',
    //     );
    //   });
    cy.get('.nav-link').eq(1).click();
    cy.url().should('be.equal', 'https://rahulshettyacademy.com/angularpractice/shop');

    // create custom Cypress command in support/commands.js
    this.data.productName.forEach(function (el) {
      cy.selectProduct(el);
    });

    cy.get('a.nav-link.btn.btn-primary').click();
    cy.get('h4.media-heading').should('have.length', '4');
  });
});
