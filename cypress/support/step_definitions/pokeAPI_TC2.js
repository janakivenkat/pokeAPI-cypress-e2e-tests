/**********************************************************************
Name of test : pokeAPI_TC2.js
Description : Get berry details using a valid AND invalid berry name
Validation : Get berry details using a valid AND invalid berry name
Created By : Janaki Venkatesh 22-01-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/
import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { BerryAPI } from '../pageObjects/berryAPIPage';
import berryData from '../../fixtures/berryData.json';
const berryAPI = new BerryAPI();

// Step to call the API with an invalid berry name
Given('I call the berry API with an invalid berry name', () => {
  berryAPI.getBerryDetails(berryData.invalidBerryName).as('apiResponse');
});