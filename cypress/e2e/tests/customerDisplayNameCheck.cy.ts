import { KatanaLogin } from '../../page-objects/katana-login-page.cy';
import { KatanaCustomerCardPage } from '../../page-objects/customer-card-page.cy';
import { PlusSign } from '../../page-objects/plus-sign.cy';
const login = new KatanaLogin();
const cardPage = new KatanaCustomerCardPage();
const plusSign = new PlusSign();

//Login with valid credentials

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

    //Checking if display name label has right color and includes first name and last name fields
    it('Customer Page Check',() => {

    var firstName="Test";
    var lastName="Try";
    cardPage.displayNameLabel().should('have.css', 'color', 'rgb(228, 44, 0)');
    cardPage.firstNameField().type(firstName);
    cardPage.lastNameField().type(lastName).type('{enter}');

    cardPage.displayNameField().should('have.value', firstName + " " +lastName);

    });