Feature: Gallery Page
  As a user who wants to view lotus imagery
  I want to browse a gallery of lotus flower images
  So that I can appreciate the beauty of lotus flowers

  Background:
    Given the app is running
    And I navigate to the "gallery" page

  Scenario: Gallery page displays title and description
    Then I should see the page title "Lotus Flower Gallery"
    And I should see the page description "A curated collection of stunning lotus flower images."

  Scenario: Gallery page displays all image cards
    Then I should see 12 gallery cards

  Scenario: Gallery cards display image titles
    Then the page should contain the text "Pink Sacred Lotus"
    And the page should contain the text "White Lotus Bud"
    And the page should contain the text "Blue Water Lily"
    And the page should contain the text "Red Lotus Field"
    And the page should contain the text "Lotus Seed Pod"
    And the page should contain the text "Yellow American Lotus"
    And the page should contain the text "Lotus Leaves"
    And the page should contain the text "Double Petal Lotus"
    And the page should contain the text "Lotus at Dusk"
    And the page should contain the text "Lotus Root Cross-section"
    And the page should contain the text "Lotus in Rain"
    And the page should contain the text "Miniature Lotus"

  Scenario: Gallery cards have colored placeholder backgrounds
    Then each gallery card should have a colored background
