Feature: Types Page
  As a user interested in lotus flower varieties
  I want to view different types of lotus flowers
  So that I can learn about their characteristics

  Background:
    Given the app is running
    And I navigate to the "types" page

  Scenario: Types page displays title and description
    Then I should see the page title "Types of Lotus Flowers"
    And I should see the page description "Explore the diverse varieties of lotus flowers found around the world."

  Scenario: Types page displays all lotus variety cards
    Then I should see 8 cards on the page

  Scenario: Each type card displays name and scientific name
    Then I should see a card with title "Sacred Lotus"
    And I should see a card with subtitle "Nelumbo nucifera"

  Scenario: Type cards display attribute chips
    Then the "Sacred Lotus" card should display chips:
      | chip       |
      | Pink       |
      | 20-30 petals |
      | Asia       |
