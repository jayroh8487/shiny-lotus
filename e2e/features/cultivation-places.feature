Feature: Cultivation Places Page
  As a user interested in where lotus flowers are grown
  I want to view cultivation locations worldwide
  So that I can understand the global distribution of lotus farming

  Background:
    Given the app is running
    And I navigate to the "cultivation-places" page

  Scenario: Cultivation Places page displays title and description
    Then I should see the page title "Lotus Cultivation Places"
    And I should see the page description "Major regions worldwide where lotus flowers are cultivated commercially and traditionally."

  Scenario: Cultivation Places page displays all location cards
    Then I should see 8 cards on the page

  Scenario: Cultivation card displays country information
    Then I should see a card with title "India"
    And the page should contain the text "Kashmir, Kerala, West Bengal"

  Scenario: All cultivation countries are listed
    Then the page should contain the text "India"
    And the page should contain the text "China"
    And the page should contain the text "Vietnam"
    And the page should contain the text "Thailand"
    And the page should contain the text "Japan"
    And the page should contain the text "Egypt"
    And the page should contain the text "Australia"
    And the page should contain the text "United States"
