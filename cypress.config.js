const { defineConfig } = require('cypress');

const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/features/*.feature',
    stepDefinitions: 'cypress/support/step_definitions/*.js',
  },

  reporter: 'mochawesome',
  reporterOptions: {
    // To display small circular charts regarding test results
    charts: true,
    // Generate JSON file to create custom reports
    json: true,
    // Customize the directory in which reports are saved
    reportsDir: 'mochawesome-report',
    // Customize the report file name
    reportFilename: 'my-report',
    // Generate new report file or overwrite the a single file
    overwrite: true
  }
});
