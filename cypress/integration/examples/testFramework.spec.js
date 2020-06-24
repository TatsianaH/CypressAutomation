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
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get('.form-group input[name="name"]').should('have.attr', 'minlength', '2');
    cy.get('.form-group input[name="name"]').type(this.data.name);
    cy.log(this.data.name);
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
  });
});
