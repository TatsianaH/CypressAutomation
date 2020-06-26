class HomePage {
  openUrl(url) {
    cy.visit(url);
  }

  getNameInput() {
    return cy.get('.form-group input[name="name"]');
  }

  getTwoWayDataBindingExampleInput() {
    return cy.get('h4 input[name="name"]');
  }

  getEmailInput() {
    return cy.get('input[name="email"]');
  }

  getPasswordInput() {
    return cy.get('#exampleInputPassword1');
  }

  getCheckBox() {
    return cy.get('#exampleCheck1');
  }

  getGenderSelect() {
    return cy.get('#exampleFormControlSelect1');
  }

  getEntrepreneurRadioBtn() {
    return cy.get('#inlineRadio3');
  }

  getEmployedRadioBtn() {
    return cy.get('#inlineRadio2');
  }

  getDobInput() {
    return cy.get('input[name="bday"]');
  }

  getSubmitBtn() {
    return cy.get('.btn.btn-success');
  }

  getProductPageLink() {
    return cy.get('.nav-link');
  }
}

export default HomePage;
