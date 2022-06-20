
/// <reference types="cypress" />
export class KatanaCustomersPage{
    lastCustomerName(){
    return cy.get('.ag-row-last > [aria-colindex="3"]');
    }
    lastCustomerEmail(){
     return cy.get('.ag-row-last > [aria-colindex="4"]')
     }
    lastCustomerPhone(){
         return cy.get('.ag-row-last > [aria-colindex="6"]');
     }
     lastCustomerComment(){
        return cy.get('.ag-row-last > [aria-colindex="7"]');
    }
  }