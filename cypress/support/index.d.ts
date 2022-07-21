/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(email: string, password: string)
        sendGetRequest(url:string, headers?: object)
    }
}
