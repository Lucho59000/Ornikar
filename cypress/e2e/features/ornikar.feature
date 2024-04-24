Feature: Landing Page Feature
  As a user
  I want to visit the landing page
  and I want to do a devis

Scenario: User end-to-end journey until receiving a "Devis" 
    Given I navigate to the website
    When I click on tarif button
    When I fill out the form with valid details
    Then I finalyse it

Scenario: User end-to-end journey leave and come back 
    Given I navigate to the website
    When I click on tarif button
    When I start filling out the form
    When I save and navigate away from the page
    Then I return to the page 
    
