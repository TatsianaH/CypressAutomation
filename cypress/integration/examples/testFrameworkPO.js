/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage';

describe('Test', () => {
  before(function () {
    cy.fixture('example').then((data) => {
      this.data = data;
    });
  });

  it('should fill and check all fields on the page', function () {
    //cy.visit('https://rahulshettyacademy.com/angularpractice/');
    const homePage = new HomePage();
    homePage.openUrl(this.data.homePageUrl);
    homePage.getNameInput().should('have.attr', 'minlength', '2');
    homePage.getNameInput().type(this.data.name);
    homePage.getNameInput().should('have.value', this.data.name);
    homePage.getTwoWayDataBindingExampleInput().should('have.value', this.data.name);
    homePage.getEmailInput().type(this.data.email);
    homePage.getPasswordInput().type('123456');
    homePage.getCheckBox().check();
    homePage.getCheckBox().should('be.checked');
    homePage.getGenderSelect().select(this.data.gender);
    homePage.getEntrepreneurRadioBtn().should('be.disabled');
    homePage.getEmployedRadioBtn().should('be.not.checked');
    homePage.getEmployedRadioBtn().check();
    homePage.getEmployedRadioBtn().should('be.checked');
    homePage.getDobInput().type('2020-06-24');
    homePage.getSubmitBtn().click();
    // cy.on('windows:alert', (str) => {
    //     expect(str).to.be.equal(
    //       'Success! The Form has been submitted successfully!',
    //     );
    //   });
    homePage.getProductPageLink().eq(1).click();
    cy.url().should('be.equal', 'https://rahulshettyacademy.com/angularpractice/shop');

    // create custom Cypress command in support/commands.js
    this.data.productName.forEach(function (el) {
      cy.selectProduct(el);
    });

    cy.get('a.nav-link.btn.btn-primary').click();
    cy.get('h4.media-heading').should('have.length', '4');
  });
});
