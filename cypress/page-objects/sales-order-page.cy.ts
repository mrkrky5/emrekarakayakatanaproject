//Sales order page table, last line customer name field 
/// <reference types="cypress" />
export class SalesOrder{
    salesOrderCustomerName(){
    return cy.get('.ag-row-last > [aria-colindex="4"]');
    }
}