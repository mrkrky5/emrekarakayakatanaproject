import { KatanaLogin } from '../../page-objects/katana-login-page.cy';
const login = new KatanaLogin();

    it('Katana Login',() => {
        cy.visit('https://katanamrp.com/login/');

        login.katanaMailInput().type('emrekrky5@gmail.com');
        login.katanaPassInput().type('Test123456');
        login.loginButton().click();
        cy.get('.auth0-global-message').should('exist');

    });
