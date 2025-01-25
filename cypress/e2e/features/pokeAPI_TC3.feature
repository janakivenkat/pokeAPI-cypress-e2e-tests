Feature: Berry Flavor API calls and potency

        Scenario: Get berry details using a valid berry flavor name "spicy"
            Given I call the berry flavor API with a valid flavor name
             Then the response status code should be 200
              And the response should contain the "berries" field

        Scenario: Get the berry with the highest potency from spicy flavor
            Given I call the berry flavor API with a valid flavor name
              And I find the berry with the highest potency from the spicy flavor
             Then I call the berry API with a fetched berry name
              And the response status code should be 200
              And the response should contain the "name" field
