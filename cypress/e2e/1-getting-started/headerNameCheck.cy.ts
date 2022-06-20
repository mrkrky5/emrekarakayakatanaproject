import { KatanaLogin } from '../../page-objects/katana-login-page.cy';
import { KatanaCustomerCardPage } from '../../page-objects/customer-card-page.cy';
import { PlusSign } from '../../page-objects/plus-sign.cy';
const login = new KatanaLogin();
const cardPage = new KatanaCustomerCardPage();
const plusSign = new PlusSign();

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

    var firstName="Test";
    var lastName="Try";
    cardPage.firstNameField().type(firstName);
    cardPage.lastNameField().type(lastName);
    cardPage.displayNameField().click();
    cardPage.displayNameField().type('{enter}');
    cardPage.headerName().invoke('text').should('equal', firstName+" "+lastName);

});