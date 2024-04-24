export default class OrnikarPage {
  
    continueButton() {
      return cy.get('[class^="_ButtonSection_"]')
      .get('button[class^="kitt_Button_"]').click();
    }

    saveLatterButton() {
      return cy.get('[class^="_ButtonSection_"]')
      .get('[role="button"]').eq(1).click();
    }

    jour() {
      return cy.get('input[placeholder="JJ"]').click().type('22');
    }
    
    mois() {
      return cy.get('input[placeholder="MM"]').click().type('05');
    }

    annee() {
      return cy.get('input[placeholder="AAAA"]').click().type('2024'); 
    }

    jourverif() {
      return cy.get('input[placeholder="JJ"]').should('have.value', '22');
    }
    
    moisverif() {
      return cy.get('input[placeholder="MM"]').should('have.value', '05');
    }

    anneeverif() {
      return cy.get('input[placeholder="AAAA"]').should('have.value', '2024'); 
    }

    acceptcookie() {
      return cy.get('#axeptio_btn_acceptAll').click(); 
    }
    
    tarifButton() {
      return cy.get('a[href="/assurance-auto/souscription?reset=true"].button.is-mustard-new-style').click(); 
    }
    

    searchbyplate() {
      cy.get('div._Wrapper_mddhm_4:first-child img').click(); 
    }

    
  }
