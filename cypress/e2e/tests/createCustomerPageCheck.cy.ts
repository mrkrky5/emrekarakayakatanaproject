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

    /*    cy.get('.appcues--theme--LouHUxtzM5NWOFo8Zh6 > iframe', { timeout: 30000 }).then(iframe => {

            cy.wrap(iframe)                   // from Cypress blog ref above
            .its('0.contentDocument.body')
            .should('not.be.empty')           // ensure the iframe body is loaded
            .as('iframeBody')                 // save for further commands within iframe.body
          
            //.contains('button', 'Continue', { timeout: 10000 })     // returns 2 buttons!
          
            .contains(new RegExp("I am just looking around, I don't need any solution now", "g")).click();
        })
        cy.get('.appcues--theme--LouHUxtzM5NWOFo8Zh6 > iframe', { timeout: 30000 }).then(iframe => {

                cy.wrap(iframe)                   // from Cypress blog ref above
                .its('0.contentDocument.body')
                .should('not.be.empty')           // ensure the iframe body is loaded
                .as('iframeBody')                 // save for further commands within iframe.body
              
                //.contains('button', 'Continue', { timeout: 10000 })     // returns 2 buttons!
              
                .contains(new RegExp("No, we don’t manufacture anything", "g")).click();
          })  
    */
          plusSign.plusSign().should('exist')
            .click();
            plusSign.customerSelection().should('exist')
            .click();
    });

    //Checking and seeing existance of all fields in customer card page
    it('Customer Page Check',() => {

        cardPage.firstNameLabel().should('exist');
        cardPage.firstNameField().should('exist');
        cardPage.lastNameLabel().should('exist');
        cardPage.lastNameField().should('exist');
        cardPage.billingAddressField().should('exist');
        cardPage.billingAddressLabel().should('exist');
        cardPage.companyNameField().should('exist');
        cardPage.companyNameLabel().should('exist');
        cardPage.defaultShippingAddressField().should('exist');
        cardPage.defaultShippingAddressLabel().should('exist');
        cardPage.displayNameField().should('exist');
        cardPage.displayNameLabel().should('exist');
        cardPage.emailField().should('exist');
        cardPage.emailLabel().should('exist');
        cardPage.phoneField().should('exist');
        cardPage.phoneLabel().should('exist');
        cardPage.commentField().should('exist');
        cardPage.commentLabel().should('exist');
        cardPage.displayNameLabel().should('have.css', 'color', 'rgb(228, 44, 0)');
    });