Feature: Export Trends Page
  As a user interested in lotus market data
  I want to view export trends and statistics
  So that I can understand the lotus flower market

  Background:
    Given the app is running
    And I navigate to the "export-trends" page

  Scenario: Export Trends page displays title and description
    Then I should see the page title "Lotus Export Trends"
    And I should see the page description "Global export data and market trends for lotus products."

  Scenario: Export trends table displays yearly data
    Then the export trends table should contain 6 rows

  Scenario: Export trends display year range
    Then the page should contain the text "2020"
    And the page should contain the text "2021"
    And the page should contain the text "2022"
    And the page should contain the text "2023"
    And the page should contain the text "2024"
    And the page should contain the text "2025"

  Scenario: Export trends display top exporters
    Then the page should contain the text "China"
    And the page should contain the text "Vietnam"

  Scenario: Export trends display key products
    Then the page should contain the text "Lotus Root"
    And the page should contain the text "Lotus Seeds"
    And the page should contain the text "Lotus Tea"
    And the page should contain the text "Lotus Extract"
    And the page should contain the text "Lotus Silk"

  Scenario: Exporter market share data is displayed
    Then the page should contain the text "45%"
    And the page should contain the text "20%"
    And the page should contain the text "15%"
