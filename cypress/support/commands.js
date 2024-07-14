// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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

// Código para tratar exceções não capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retornar false para evitar que o Cypress falhe ao detectar exceções não capturadas
    return false;
});

// Screenshot a cada cenário 
afterEach(function () {
    if (this.currentTest.state === 'failed') {
      const screenshotFileName = `${this.currentTest.parent.title} -- ${this.currentTest.title} (failed).png`;
      cy.screenshot(screenshotFileName);
    } else {
      const screenshotFileName = `${this.currentTest.parent.title} -- ${this.currentTest.title}.png`;
      cy.screenshot(screenshotFileName);
    }
  });