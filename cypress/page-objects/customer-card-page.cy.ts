// Customer Card Page elements
/// <reference types="cypress" />
export class KatanaCustomerCardPage{
    firstNameLabel(){
    return cy.get('[data-testid="inputCustomerFirstName"] > .MuiFormLabel-root');
    }
    firstNameField(){
        return cy.get('[data-testid="inputCustomerFirstName"] > .MuiInputBase-root > .MuiInputBase-input');
        }
    
    lastNameLabel(){
        return cy.get('[data-testid="inputCustomerLastName"] > .MuiFormLabel-root');
    }
    lastNameField(){
        return cy.get('[data-testid="inputCustomerLastName"] > .MuiInputBase-root > .MuiInputBase-input');
    }

    companyNameLabel(){
        return cy.get('[data-testid="inputCustomerCompany"] > .MuiFormLabel-root');
    }
    companyNameField(){
        return cy.get('[data-testid="inputCustomerCompany"] > .MuiInputBase-root > .MuiInputBase-input');
    }

    billingAddressLabel(){
        return cy.get('[data-testid="inputCustomerDefaultBillingAddress"] > .MuiFormLabel-root');
    }
    billingAddressField(){
        return cy.get('[data-testid="inputCustomerDefaultBillingAddress"] > .MuiInputBase-root > .MuiInputBase-input');
    }

    defaultShippingAddressLabel(){
        return cy.get('[data-testid="inputCustomerDefaultShippingAddress"] > .MuiFormLabel-root');
    }
    defaultShippingAddressField(){
        return cy.get('[data-testid="inputCustomerDefaultShippingAddress"] > .MuiInputBase-root > .MuiInputBase-input');
    }

    displayNameLabel(){
        return cy.get('#displayNamePicker-label');
    }
    displayNameField(){
        return cy.get('#displayNamePicker');
    }

    emailLabel(){
        return cy.get('[data-testid="inputCustomerEmail"] > .MuiFormLabel-root');
    }
    emailField(){
        return cy.get('[data-testid="inputCustomerEmail"] > .MuiInputBase-root > .MuiInputBase-input');
    }

    phoneLabel(){
        return cy.get('[data-testid="inputCustomerPhone"] > .MuiFormLabel-root');
    }
    phoneField(){
        return cy.get('[data-testid="inputCustomerPhone"] > .MuiInputBase-root > .MuiInputBase-input');
    }

    commentLabel(){
        return cy.get('[data-testid="inputCustomerComment"] > .MuiFormLabel-root');
    }
    commentField(){
        return cy.get('[data-testid="inputCustomerComment"] > .MuiInputBase-root > .MuiInputBase-input');
    }
    saveInfoField(){
        return cy.get('.jss45');
    }
    threeDots(){
        return cy.get('span.print-hide > .MuiButtonBase-root');
    }
    closeButton(){
        return cy.get('.MuiButtonBase-root.print-hide');
    }
    emptyField(){
        return cy.get('.jss288');
    }
    headerName(){
        return cy.get('[data-testid="header-name-customer"]');
    }
  }