class CheckoutPage {
  getProducts() {
    return cy.get('h4.media-heading');
  }

  getCheckoutBtn() {
    return cy.get(':nth-child(6) > :nth-child(5) > .btn');
  }
}

export default CheckoutPage;
