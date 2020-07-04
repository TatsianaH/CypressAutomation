class ProductPage {
  getCheckoutBtn() {
    return cy.get('a.nav-link.btn.btn-primary');
  }
}

export default ProductPage;
