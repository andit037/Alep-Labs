const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      // "browsers": [
      //   {
      //     "name": "chrome",
      //     "displayName": "Chrome",
      //     "version": "latest", // Or specify a specific version
      //     "family": "chromium",
      //     "path": '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      //     "majorVersion": '128'
      //   },
      //   // Add other browsers as needed (e.g., firefox, electron)
      // ]
  },
});
