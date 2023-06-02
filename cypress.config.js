const { defineConfig } = require('cypress');

module.exports = defineConfig({
  downloadsFolder: './cypress/downloads',
  fileServerFolder: '/cypress/e2e/tests/',
  fixturesFolder: './cypress/fixtures',
  screenshotsFolder: './cypress/screenshots',
  videosFolder: './cypress/videos',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
