class ProductPage {
  openUrl(url) {
    cy.visit(url);
  }

  getCheckoutBtn() {
    return cy.get('a.nav-link.btn.btn-primary');
  }
}

export default ProductPage;
