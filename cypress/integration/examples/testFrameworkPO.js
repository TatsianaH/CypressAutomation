/// <reference types="Cypress" />
import HomePage from '../../support/pageObject/HomePage';
import ProductPage from '../../support/pageObject/ProductPage';
import CheckoutPage from '../../support/pageObject/CheckoutPage';
import FinalPage from '../../support/pageObject/FinalPage';

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

    const productPage = new ProductPage();

    // create custom Cypress command in support/commands.js
    this.data.productName.forEach(function (el) {
      cy.selectProduct(el);
    });

    productPage.getCheckoutBtn().click();
    cy.url().should('be.equal', 'https://rahulshettyacademy.com/angularpractice/shop');

    const checkoutPage = new CheckoutPage();
    checkoutPage.getProducts().should('have.length', '4');
    // add tests to check the sum of all products and compare with total price
    //

    // get all text in the 2nd column of the table
    let totalPriceExpected = 0;

    cy.get('tr td:nth-child(4) strong')
      .each((el, ind, list) => {
        const price = el.text().replace(/[^0-9]/g, '');
        totalPriceExpected = +totalPriceExpected + +price;
        //verify which one contains the necessary text
        // if (text.includes('Python')) {
        //   // get the next child element
        //   cy.get('tr td:nth-child(4)')
        //     .eq(ind)
        //     .next()
        //     .then((price) => {
        //       const priceAmount = price.text();
        //       //verify the price
        //       expect(priceAmount).to.be.equal('25');
        //     });
        // }
      })
      .then(function () {
        cy.log(totalPriceExpected);
        cy.get('tr td:nth-child(5) h3').should('contain', totalPriceExpected);
      });

    cy.get('tr td:nth-child(5) h3').then(function (str) {
      const totalPrice = +str.text().split(' ')[1];
      expect(totalPrice).eq(totalPriceExpected);
    });

    checkoutPage.getCheckoutBtn().click();

    const finalPage = new FinalPage();
    cy.url().should('be.equal', 'https://rahulshettyacademy.com/angularpractice/shop');

    finalPage.getInputCountryField().type('India');
    cy.wait(2000);

    // finalPage.getCountryFronDropDown().each((el, ind, list) => {
    //   cy.log(el.text());
    //   if (el.text() === 'India') {
    //     el.click();
    //   }
    // });

    finalPage.getCountryFronDropDown().click();
    cy.wait(1000);

    finalPage.getInputCountryField().should('have.value', 'India');

    finalPage.getCheckBox().check({ force: true });
    finalPage.getCheckBox().should('be.checked');

    finalPage.getPurchaseInput().click();

    finalPage.getAlertMsg().should('be.visible');
    finalPage.getAlertMsg().should('have.text', this.data.alertMsg);

    finalPage.getAlertMsg().then(function (str) {
      const actualTextMsg = str.text();
      expect(actualTextMsg.includes('Success')).to.be.true;
    });
  });
});
