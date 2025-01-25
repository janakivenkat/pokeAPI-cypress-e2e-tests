/**********************************************************************
Name of test : pokeAPI_TC3.js
Description : Get berry details using a valid berry flavor name "spicy"
Validation : Get the berry with the highest potency from spicy flavor
Created By : Janaki Venkatesh 22-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { BerryAPI } from '../../support/pageObjects/berryAPIPage';
import berryData from '../../fixtures/berryData.json';
const berryAPI = new BerryAPI();

// Step to call the berry flavor API with a valid name
Given('I call the berry flavor API with a valid flavor name', () => {
  berryAPI.getBerryFlavorDetails(berryData.validFlavorName).as('apiResponse');
});

// Step to find the berry with the highest potency from the "spicy" flavor
Then('I find the berry with the highest potency from the spicy flavor', () => {
  cy.get('@apiResponse')
    .its('body')
    .then((responseBody) => {
      const berriesWithSpicyFlavor = responseBody.berries;

      // Find the berry with the highest potency
      const highestPotencyBerry = berriesWithSpicyFlavor.reduce((prev, current) => {
        return prev.potency > current.potency ? prev : current;
      });

      const highestPotencyBerryName = highestPotencyBerry.berry.name;
      cy.wrap(highestPotencyBerryName).as('highestPotencyBerryName');
      cy.log(highestPotencyBerryName);
    });
});

//step to get details of high potency berry name that is fetched
Then('I call the berry API with a fetched berry name', () => {
  cy.get('@highestPotencyBerryName')
    .then((highestPotencyBerryName) => {
      berryAPI.getBerryDetails(highestPotencyBerryName).as('apiResponse');
    });
});