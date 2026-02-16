Feature: App Navigation
  As a user of the Shiny Lotus app
  I want to navigate between all pages using the sidenav
  So that I can access all lotus flower information

  Background:
    Given the app is running

  Scenario: Default route redirects to Types page
    When I navigate to the root URL
    Then I should be on the "types" page
    And I should see the page title "Types of Lotus Flowers"

  Scenario: Sidenav displays all navigation items
    When I navigate to the root URL
    Then the sidenav should display the following items:
      | label              |
      | Lotus Types        |
      | Prices             |
      | Cultivation Places |
      | Growing Seasons    |
      | Farming Guide      |
      | Medicinal Uses     |
      | Culinary Uses      |
      | Export Trends      |
      | Gallery            |
      | FAQs               |

  Scenario: Toolbar displays app name
    When I navigate to the root URL
    Then the toolbar should display "Shiny Lotus"

  Scenario: Logo header is clickable and navigates to Types
    When I navigate to the "faqs" page
    And I click the logo header
    Then I should be on the "types" page

  Scenario Outline: Navigate to each page via sidenav
    When I click the "<label>" navigation item
    Then I should be on the "<route>" page
    And I should see the page title "<title>"

    Examples:
      | label              | route              | title                          |
      | Lotus Types        | types              | Types of Lotus Flowers         |
      | Prices             | price              | Lotus Flower Prices            |
      | Cultivation Places | cultivation-places | Lotus Cultivation Places       |
      | Growing Seasons    | seasons            | Lotus Growing Seasons          |
      | Farming Guide      | farming            | Lotus Farming Guide            |
      | Medicinal Uses     | medicinal-uses     | Medicinal Uses of Lotus        |
      | Culinary Uses      | culinary-uses      | Culinary Uses of Lotus         |
      | Export Trends      | export-trends      | Lotus Export Trends            |
      | Gallery            | gallery            | Lotus Flower Gallery           |
      | FAQs               | faqs               | Lotus Flower FAQs              |

  Scenario: Active navigation item is highlighted
    When I click the "Prices" navigation item
    Then the "Prices" navigation item should be active

  Scenario: Wildcard route redirects to Types
    When I navigate to an unknown route
    Then I should be on the "types" page
