const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on("file:preprocessor", createBundler({plugins: [createEsbuildPlugin.default(config)],}));
            preprocessor.addCucumberPreprocessorPlugin(on, config);
            return config;
        },
        specPattern: "**/*.feature",
        supportFile: 'cypress/support/e2e.js',
        baseUrl: "https://pokeapi.co/",
    },
    "video": true,
    "screenshotOnRunFailure": true,
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        overwrite: true,
    }, 
}); 