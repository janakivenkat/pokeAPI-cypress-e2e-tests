export class BerryAPI {
  // Method to call the Berry API with a valid ID or name
  getBerryDetails(idOrName) {
    return cy.request({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/berry/${idOrName}/`,
      failOnStatusCode: false // Don't fail the test on non-2xx responses
    });
  }

  //function to get flavour details
  getBerryFlavorDetails(flavorName) {
    return cy.request({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/berry-flavor/${flavorName}/`,
      failOnStatusCode: false // Allow non-2xx responses without failing the test
    });
  }
}