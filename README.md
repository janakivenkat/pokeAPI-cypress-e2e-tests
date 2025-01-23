
## POKE API CYPRESS E2E TESTS

This project contains basic functionalities for the application https://pokeapi.co/

## Description

Using Cypress, we will create a test automation framework with the following features:

The Page Object Model pattern
BDD (Cucumber) support
Create reports that include videos and screenshots

## Project Overview
  
The tests cover the following test cases:
- **Berry API Calls**: Test to verify berry API calls with valid and invalid berry id.
- **Berry API calls with name**: Test to verify berry API calls with valid and invalid berry name.
- **Berry API calls with name and potency**: Test to verify berry API calls with name and high potency

## Pre-requisites

Before running the tests, make sure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
             - During installation make sure you select npm manager checkbox option and install node.js
             - Check if environment variables are added in the system path 
             - Now restart the cmd prompt and try the below commands.
             - node -v
             - npm -v
             - You should get appropriate version numbers probably the latest node (v20.18.0) and npm(10.8.2)

- **Cypress**: Installed as a dev dependency in this project.
             - Make use of command npm install cypress --save-dev
             - After successful installation , try opening the cypress using command npx cypress open 
             - Create your first spec.cy.js file.
             - You can execute the test using the command npx cypress run in headless mode

## Installation

1. Clone the repository:

```bash
git clone https://github.com/janakivenkat/pokeAPI-cypress-e2e-tests.git
```

2. Navigate to the project directory:

```bash
cd pokeAPI-cypress-e2e-tests
```

3. Install the dependencies:

```bash
npm install
```

4. Install necessary plugins:

Cypress Cucumber preprocessor:

```bash
npm install @badeball/cypress-cucumber-preprocessor --save-dev
```

Mocha Awesome Reporter:

```bash
npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
```

Cucumber esbuild preprocessor:

```bash
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
```

5. ADD TO CONFIG

cypress.config.js

```bash
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
	specPattern: "**/*.feature",
  },
});
```
configure the cypress-cucumber-preprocessor to using global step definitions
package.json

```bash
"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/e2e/step_definitions/",
    "nonGlobalStepDefinitions": false
  }
```

6. Define report folder
cypress.config.js

```bash
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      ...
    },
    ...,
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
  },
})
```

7. Add Mochawesome reporter

Install

```bash
npm install cypress-mochawesome-reporter --save-dev
```
Add to config
cypress.config.js

```bash
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      ...,
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    ...,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
})
```
Add to cypress/support/e2e.js
e2e.js

```bash
import 'cypress-mochawesome-reporter/register';
```

## Running Tests

To open the Cypress Test Runner, use the following command:

```bash
npx cypress open
```

This will launch the Cypress UI, where you can run individual test files.

Alternatively, you can run all tests headlessly with:

```bash
npx cypress run
```

## Folder Structure

```
/cypress
  /e2e
    /features
    - pokeAPI_TC1.feature     // Test to verify berry API calls with valid and invalid berry id.
    - pokeAPI_TC2.feature      // Test to verify berry API calls with valid and invalid berry name.
    - pokeAPI_TC3.feature   // Test to verify berry API calls with berry name and high potency.
  /fixtures
    - berryData.json   // test data file for all test cases 
  /support
    /pageObjects
    - berryAPIPage.js         // Objects and functions in berryAPI page
     /step_definitions
    - commonPokeAPI_Steps.js    // common step definition files used for other test
    - pokeAPI_TC1.js  // step definition file for berry api calls with id
    - pokeAPI_TC2.js  // step definition file for berry api calls with name
    - pokeAPI_TC3.js  // step definition file for berry api calls with name and high potency
  - commands.js         // Custom Cypress commands
  - e2e.js            // Global configurations
```