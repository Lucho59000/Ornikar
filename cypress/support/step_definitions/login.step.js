import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import OrnikarPage from "../../pages/OrnikarPage";

const Ornikar = new OrnikarPage();

Given('I navigate to the website', () => {
  cy.visit('https://www.ornikar.com/assurance-auto');
  cy.wait(2000);
  Ornikar.acceptcookie();
});


When('I click on tarif button', () => {
  Ornikar.tarifButton();
  Ornikar.searchbyplate();
});

When('I fill out the form with valid details', () => {
  cy.get('#vehiculeImmatriculation').type('EZ135EA');
  Ornikar.continueButton();
  cy.get('.kitt_Content_XW1c8').click(); 
  cy.get('[data-value="BM17133"]').click();
  Ornikar.jour(),
  Ornikar.mois();
  Ornikar.annee();
  Ornikar.continueButton();
  Ornikar.jour(),
  Ornikar.mois();
  Ornikar.annee();
  Ornikar.continueButton();
  cy.get('label[for="vehiculeFinancement-1"]').click();
  cy.get('.r-bcqeeo').invoke('text').should('contain', 'BMW')
  .should('contain', 'EZ135EA')
  .should('contain', '27/05/1999');
  Ornikar.continueButton();
  Ornikar.jour(),
  Ornikar.mois();
  cy.get('input[placeholder="AAAA"]').click().type('2005');
  Ornikar.continueButton();
  cy.get('[for="primaryDriver.licenseType-1"]').click();
  cy.get('[for="primaryDriver.accompaniedDriving-YES"]').click();
  cy.get('[for="usage-2"]').click();
  Ornikar.continueButton();
  cy.get('[for="parkingLocation-1"]').click();
  cy.get('#parkingCodePostal').type('59000');
  cy.wait(2000);
  cy.get('.kitt_Content_XW1c8').should('contain', 'LILLE');
  Ornikar.continueButton();
  cy.get('[for="housingType-2"]').click();
  cy.get('[for="isPropertyOwner-YES"]').click();
  cy.get('[for="registrationDocumentOwnerIsSubscriber-yes"]').click();
  cy.get('.r-bcqeeo').invoke('text').should('contain', '59000')
  .should('contain', '22/05/2005');
  Ornikar.continueButton();
  cy.get('[for="primaryDriver.hasBeenCovered-NonJamais"]').click({ force: true });
  cy.get('[for="primaryDriver.hasBeenCancelledOrSuspended-NO"]').click({ force: true });
  cy.get('[for="primaryDriver.claimQuantity-None"]').click({ force: true });

  Ornikar.continueButton();
  cy.get('[for="declareSecondaryDriver-no"]').click({ force: true });
  Ornikar.continueButton();
});

Then('I finalyse it', () => {
  cy.contains('Ça y est votre tarif est prêt ! Pour l\'obtenir, il ne vous reste plus qu\'à remplir ces dernières informations.')
  .should('be.visible');
});


// 2nd scenario
  
When('I start filling out the form', () => {
  cy.get('#vehiculeImmatriculation').type('EZ135EA');
  Ornikar.continueButton();

  // Select values from dropdowns
  cy.get('.kitt_Content_XW1c8').click(); 
  cy.get('[data-value="BM17133"]').click();

  // Fill in the date fields
  Ornikar.jour(),
  Ornikar.mois();
  Ornikar.annee();
  Ornikar.continueButton();
  Ornikar.jour(),
  Ornikar.mois();
  Ornikar.annee();
});

When('I save and navigate away from the page', () => {
  Ornikar.saveLatterButton();
  cy.get('._Card_1l128_18').contains('Votre devis a été sauvegardé avec succès! Reprenez le à tout moment ici-même en retournant sur notre site');
  cy.visit('https://www.ornikar.com/assurance-auto');
});


Then('I return to the page', () => {
  cy.get('.display-inlineflex > .is-secondary-style02').click();
  cy.contains('Quand souhaitez-vous assurer votre véhicule ?').should('be.visible');
  cy.get('[aria-label="Back"]').click();
  Ornikar.jourverif(),
  Ornikar.moisverif();
  Ornikar.anneeverif();
});

// To not polute the prod DB I don't fill the last part 