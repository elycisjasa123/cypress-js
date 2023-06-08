import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on Practice test Automation login page', () => {
  cy.visit('https://practicetestautomation.com/practice-test-login/');
});

When('type username {string} into Username field', (username) => {
    cy.domName('username').type(username);
});

And('type password {string} into Password field', (password) => {
    cy.domName('password').type(password);
});

When('punch Submit button', () => {
    cy.domId('submit').click();
})

Then('verify new page URL contains {string}', (text) => {
    cy.url().should('contains', text);
})

And('verify new page contains expected text {string}', (text) => {
    cy.get('h1.post-title').should('have.text', text);
})

And('verify button {string} is displayed on the new page', (text) => {
    cy.get('a.has-background').should('have.text', text);
})

Then('verify error message is displayed', () => {
    cy.domId('error').should('be.visible');
})

And('verify error message text is {string}', (text) => {
    cy.domId('error').should('have.text', text);
})






When('I click the {string} button', (buttonText) => {
  cy.contains('button', buttonText).click();
});

Then('I should see the login form', () => {
  cy.get('form#login').should('be.visible');
});