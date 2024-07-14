const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://sampleapp.tricentis.com'
  },

  // Configuração do timeout global para todos os comandos Cypress
  defaultCommandTimeout: 20000 // 20 segundos

  
});


