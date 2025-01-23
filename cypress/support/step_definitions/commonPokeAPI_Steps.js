/**********************************************************************
Name of test : commonPokeAPI_Steps.js
Description : common step files for all test cases
Validation : performs common steps
Created By : Janaki Venkatesh 22-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { BerryAPI } from '../pageObjects/berryAPIPage';
import berryData from '../../fixtures/berryData.json';
const berryAPI = new BerryAPI();

// Step to call the API with a valid berry name
Given('I call the berry API with a valid berry name', () => {
  berryAPI.getBerryDetails(berryData.validBerryName).as('apiResponse');
});

// Step to verify the response status code
Then('the response status code should be {int}', (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode);
});

// Step to verify that the response contains a specific field
Then('the response should contain the {string} field', (fieldName) => {
  cy.get('@apiResponse').its('body').should('have.property', fieldName);
});