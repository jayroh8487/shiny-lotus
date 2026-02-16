Feature: Culinary Uses Page
  As a user interested in lotus cuisine
  I want to view culinary applications of lotus
  So that I can try cooking with lotus ingredients

  Background:
    Given the app is running
    And I navigate to the "culinary-uses" page

  Scenario: Culinary Uses page displays title and description
    Then I should see the page title "Culinary Uses of Lotus"
    And I should see the page description "Delicious ways lotus is used in cuisines around the world."

  Scenario: Culinary Uses page displays all recipe cards
    Then I should see 8 cards on the page

  Scenario: Recipe cards display dish names
    Then the page should contain the text "Lotus Root Chips"
    And the page should contain the text "Lotus Root Stir-Fry"
    And the page should contain the text "Lotus Seed Paste Mooncake"
    And the page should contain the text "Lotus Stem Curry"
    And the page should contain the text "Lotus Leaf Rice"
    And the page should contain the text "Lotus Tea"
    And the page should contain the text "Lotus Seed Soup"
    And the page should contain the text "Stuffed Lotus Root"

  Scenario: Recipe cards display cuisine information
    Then the page should contain the text "Japanese"
    And the page should contain the text "Chinese"
    And the page should contain the text "Indian (Kashmiri)"
    And the page should contain the text "Vietnamese"

  Scenario: Recipe cards display difficulty levels
    Then the page should contain the text "Easy"
    And the page should contain the text "Moderate"
    And the page should contain the text "Advanced"
