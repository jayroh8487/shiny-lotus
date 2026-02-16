Feature: Price Page
  As a user interested in lotus flower pricing
  I want to view price information for various lotus varieties
  So that I can compare costs across regions

  Background:
    Given the app is running
    And I navigate to the "price" page

  Scenario: Price page displays title and description
    Then I should see the page title "Lotus Flower Prices"
    And I should see the page description "Current market prices for various lotus flower varieties across regions."

  Scenario: Price table displays correct column headers
    Then the price table should have the following columns:
      | column     |
      | Variety    |
      | Price/Stem |
      | Price/Bunch|
      | Region     |

  Scenario: Price table displays all lotus varieties
    Then the price table should contain 8 rows

  Scenario: Price table contains expected data
    Then the price table should contain the following varieties:
      | variety                          |
      | Sacred Lotus (Nelumbo nucifera)  |
      | American Lotus (Nelumbo lutea)   |
      | White Lotus                      |
      | Pink Lotus                       |
      | Blue Lotus (Nymphaea caerulea)   |
      | Red Lotus                        |
      | Dwarf Lotus                      |
      | Double-Petal Lotus               |
