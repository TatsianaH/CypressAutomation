class FinalPage {
  getInputCountryField() {
    return cy.get('#country');
  }

  getCountryFronDropDown() {
    return cy.get('.suggestions li a');
  }

  getCheckBox() {
    return cy.get('#checkbox2');
  }

  getPurchaseInput() {
    return cy.get('input[type="submit"]');
  }

  getAlertMsg() {
    return cy.get('.alert');
  }
}

export default FinalPage;
