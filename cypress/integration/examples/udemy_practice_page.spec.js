/// <reference types="Cypress" />

describe('Practice with different forms, buttons, checkboxes', () => {
  it('should check, uncheck buttons, select dropdown menu`s item', () => {
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    // checkbox
    cy.get('#checkBoxOption1').check();
    cy.get('#checkBoxOption1').should('be.checked').and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck();
    cy.get('#checkBoxOption1').should('not.be.checked');
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);
    cy.get('#checkBoxOption2').should('be.checked');
    cy.get('#checkBoxOption3').should('be.checked');

    // static dropdown menu
    cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');

    // dynamic dropdown menu
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each((el, ind, list) => {
      if (el.text() === 'India') {
        el.click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'India');

    // visible/invisible
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    // radio button
    cy.get('input[value="radio2"]').check().should('be.checked');
  });
});
