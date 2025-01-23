Feature: Berry API calls with name

        Scenario: Get berry details using a valid berry name
            Given I call the berry API with a valid berry name
             Then the response status code should be 200
              And the response should contain the "name" field

        Scenario: Get berry details using an invalid berry name
            Given I call the berry API with an invalid berry name
             Then the response status code should be 404
              And the response should contain the error message "Not Found"