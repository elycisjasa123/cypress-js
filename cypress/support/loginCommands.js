Cypress.Commands.add('loginCredentials', (username, password) => {
  cy.domName('username').type(username);
  cy.domName('password').type(password);
  cy.domId('submit').click();
});

Cypress.Commands.add('snackbarMessage', (message) => {
  cy.domId('error').should('have.text', message);
});

Cypress.Commands.add('assertSuccess', (url, text) => {
  cy.url().should('contains', url);
  cy.get('h1.post-title').should('have.text', text);
});

Cypress.Commands.add('logoutUser', () => {
  cy.get('a.has-background').click();
});
