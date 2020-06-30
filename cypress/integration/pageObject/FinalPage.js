class FinalPage {
  getInputCountryField() {
    return cy.get('#country');
  }

  getCountryFronDropDown() {
    return cy.get('.suggestions li a');
  }
}

export default FinalPage;
