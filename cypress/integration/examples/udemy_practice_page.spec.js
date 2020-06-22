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

  it('should work with alerts and confirm pop-us', () => {
    // windows:alert
    cy.get('#alertbtn').click();

    cy.on('windows:alert', (str) => {
      expect(str).to.be.equal(
        'Hello , share this practice page and share your knowledge',
      );
    });

    // windows:confirm
    cy.get('#confirmbtn').click();

    cy.on('windows:confirm', (str) => {
      expect(str).to.be.equal('Hello , Are you sure you want to confirm?');
    });

    // cy.on('windows:confirm', () => {
    //   return false;
    // });
  });

  it('should open a new tab in the same browser and window (work with JQuery commands)', () => {
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.wait(3000);
    cy.url().should('be.equal', 'https://www.rahulshettyacademy.com/#/index');

    // go back to previous url
    cy.go('back');

    cy.url().should('be.equal', 'https://www.rahulshettyacademy.com/AutomationPractice/');
  });

  it('should work with web tables', () => {
    // get all text in the 2nd column of the table
    cy.get('tr td:nth-child(2)').each((el, ind, list) => {
      const text = el.text();

      //verify which one contains the necessary text
      if (text.includes('Python')) {
        // get the next child element
        cy.get('tr td:nth-child(2)')
          .eq(ind)
          .next()
          .then((price) => {
            const priceAmount = price.text();
            //verify the price
            expect(priceAmount).to.be.equal('25');
          });
      }
    });
  });
});
