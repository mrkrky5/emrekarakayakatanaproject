/// <reference types="cypress" />
export class PlusSign{
    plusSign(){
    return cy.get('.MuiFab-label > .MuiSvgIcon-root');
    }
    customerSelection(){
        return cy.get('#add-customer');
    }
    salesSelection(){
        return cy.get('#add-sales');
    }
}