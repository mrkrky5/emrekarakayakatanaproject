import { KatanaLogin } from '../../page-objects/katana-login-page.cy';
import { KatanaCustomerCardPage } from '../../page-objects/customer-card-page.cy';
import {KatanaCustomersPage} from '../../page-objects/customers-page.cy';
import { SalesOrder } from '../../page-objects/sales-order-page.cy';
import { PlusSign } from '../../page-objects/plus-sign.cy';
const login = new KatanaLogin();
const cardPage = new KatanaCustomerCardPage();
const salesOrder = new SalesOrder();
const plusSign = new PlusSign();

//Login with valid credentials

var firstName="Test";
var lastName="Try";
var email = "dummy@gmail.com";
var comment = "Test command";
var phone = "123456789";
    it('Katanamrp Login',() => {
        cy.visit('https://katanamrp.com/login/');

        login.katanaMailInput().type('emrekrky5@gmail.com');
        login.katanaPassInput().type('Test12345');
        login.loginButton().click();

          plusSign.plusSign().should('exist')
            .click();
            plusSign.customerSelection().should('exist')
            .click();
    });

    //Creating a customer with related fields
    it('Customer Page Check',() => {

        cardPage.firstNameField().type(firstName);
        cardPage.lastNameField().type(lastName);
        cardPage.emailField().type(email);
        cardPage.phoneField().type(phone);
        cardPage.commentField().type(comment);
        cardPage.displayNameField().click();
        cardPage.displayNameField().type('{enter}');
        cardPage.closeButton().click();
    
        plusSign.plusSign().should('exist')
            .click();
            plusSign.salesSelection().should('exist')
            .click();
        
    });

    //After creating a new customer, trying to create a sale for that customer and see correct information on sales order page
    it('Sales Order Check',() => {
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type(firstName+" "+lastName)
        .type('{enter}');
        cy.get(':nth-child(1) > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root.print-hide').click();
        cy.get('.ag-body-viewport').scrollTo('bottom');
        salesOrder.salesOrderCustomerName().invoke('text').should('equal', firstName+" "+lastName);
    });