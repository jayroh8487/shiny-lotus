Feature: Seasons Page
  As a user interested in lotus growing cycles
  I want to view seasonal information for lotus flowers
  So that I can plan my gardening activities

  Background:
    Given the app is running
    And I navigate to the "seasons" page

  Scenario: Seasons page displays title and description
    Then I should see the page title "Lotus Growing Seasons"
    And I should see the page description "Understanding the seasonal cycles of lotus flower growth and bloom periods."

  Scenario: Seasons page displays all seasonal cards
    Then I should see 6 cards on the page

  Scenario: Season cards display activity information
    Then the page should contain the text "Planting & Sprouting"
    And the page should contain the text "Leaf Growth"
    And the page should contain the text "Peak Bloom"
    And the page should contain the text "Seed Formation"
    And the page should contain the text "Harvest & Dormancy Prep"
    And the page should contain the text "Dormancy"

  Scenario: Season cards display temperature ranges
    Then the page should contain the text "15-25"
    And the page should contain the text "28-35"
