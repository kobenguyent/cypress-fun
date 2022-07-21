export class LoginPage {
    getEmail() {
        return cy.get('input[name="username"]');;
    }

    getPassword() {
        return cy.get('input[name="password"]');
    }

    getSubmitButton() {
        return cy.get('input[type="submit"]');
    }
}
