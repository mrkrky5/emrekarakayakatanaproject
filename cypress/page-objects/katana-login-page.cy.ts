
/// <reference types="cypress" />
export class KatanaLogin{
    katanaMailInput(){
    return cy.get('.auth0-lock-input-email');
    }
    katanaPassInput(){
     return cy.get('.auth0-lock-input-show-password')
     }
     loginButton(){
         return cy.get('.auth0-lock-submit');
     }
  }