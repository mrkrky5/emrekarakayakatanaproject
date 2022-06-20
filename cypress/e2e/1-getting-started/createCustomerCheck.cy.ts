import { KatanaLogin } from '../../page-objects/katana-login-page.cy';
import { KatanaCustomerCardPage } from '../../page-objects/customer-card-page.cy';
import {KatanaCustomersPage} from '../../page-objects/customers-page.cy';
import { PlusSign } from '../../page-objects/plus-sign.cy';
const login = new KatanaLogin();
const cardPage = new KatanaCustomerCardPage();
const customersPage = new KatanaCustomersPage();
const plusSign = new PlusSign();


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

    it('Customer Page Check',() => {

        cardPage.firstNameField().type(firstName);
        cardPage.lastNameField().type(lastName);
        cardPage.emailField().type(email);
        cardPage.phoneField().type(phone);
        cardPage.commentField().type(comment);
        cardPage.displayNameField().click();
        cardPage.displayNameField().type('{enter}');
        cardPage.closeButton().click();
    
        
    });

    it('Customers Check',() => {

       customersPage.lastCustomerName().invoke('text').should('equal', firstName+" "+lastName);
       customersPage.lastCustomerEmail().invoke('text').should('equal', email);
       customersPage.lastCustomerPhone().invoke('text').should('equal', phone);
       customersPage.lastCustomerComment().invoke('text').should('equal', comment);

    });