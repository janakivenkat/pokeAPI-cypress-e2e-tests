/**********************************************************************
Name of test : pokeAPI_TC1.js
Description : Get berry details using a valid AND invalid berry id
Validation : Get berry details using a valid AND invalid berry id
Created By : Janaki Venkatesh 22-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { BerryAPI } from '../pageObjects/berryAPIPage';
import berryData from '../../fixtures/berryData.json';
const berryAPI = new BerryAPI();

// Step to call the API with a valid ID
Given('I call the berry API with a valid berry ID', () => {
  berryAPI.getBerryDetails(berryData.validId).as('apiResponse');
});

// Step to call the API with an invalid ID
Given('I call the berry API with an invalid berry ID', () => {
  berryAPI.getBerryDetails(berryData.invalidId).as('apiResponse');
});

// Step to verify the response contains an error message
Then('the response should contain the error message {string}', (errorMessage) => {
  cy.get('@apiResponse').its('body').should('contain', errorMessage);
});