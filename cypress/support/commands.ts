import {LoginPage} from "../support/PageObjects/LoginPage";

Cypress.Commands.add('login', (email:string, password:string) => {
    const loginPage = new LoginPage();
    loginPage.getEmail().type(email);
    loginPage.getPassword().type(password);
    loginPage.getSubmitButton().click();
});

Cypress.Commands.add('sendGetRequest', (url:string, headers = {}) => {
    cy.request({
        method: 'GET',
        url,
        failOnStatusCode: false,
        headers
    })
});



// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
