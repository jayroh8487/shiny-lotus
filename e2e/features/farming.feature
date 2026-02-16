Feature: Farming Page
  As a user interested in growing lotus flowers
  I want to view a comprehensive farming guide
  So that I can successfully cultivate lotus

  Background:
    Given the app is running
    And I navigate to the "farming" page

  Scenario: Farming page displays title and description
    Then I should see the page title "Lotus Farming Guide"
    And I should see the page description "Comprehensive guide to lotus farming techniques, from pond preparation to harvest."

  Scenario: Farming page displays all step cards
    Then I should see 8 cards on the page

  Scenario: Farming steps are displayed in order
    Then the page should contain the text "Pond Preparation"
    And the page should contain the text "Tuber Selection"
    And the page should contain the text "Planting"
    And the page should contain the text "Water Management"
    And the page should contain the text "Fertilization"
    And the page should contain the text "Pest Control"
    And the page should contain the text "Harvesting Flowers"
    And the page should contain the text "Root Harvest"

  Scenario: Farming steps include tips
    Then the page should contain the text "Use clay-heavy soil"
    And the page should contain the text "Purchase from reputable nurseries"
