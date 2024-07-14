const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://sampleapp.tricentis.com'
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },

  // Configuração do timeout global para todos os comandos Cypress
  defaultCommandTimeout: 20000 // 20 segundos

  
});


