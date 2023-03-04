Cypress.Commands.add('domName', (name) => {
  return cy.get(`[name=${name}]`);
});

Cypress.Commands.add('domId', (name) => {
  return cy.get(`[id=${name}]`);
});
