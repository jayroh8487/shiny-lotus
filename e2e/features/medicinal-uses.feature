Feature: Medicinal Uses Page
  As a user interested in lotus health benefits
  I want to view medicinal uses of different lotus parts
  So that I can understand the therapeutic properties of lotus

  Background:
    Given the app is running
    And I navigate to the "medicinal-uses" page

  Scenario: Medicinal Uses page displays title and description
    Then I should see the page title "Medicinal Uses of Lotus"
    And I should see the page description "Traditional and modern medicinal applications of various lotus plant parts."

  Scenario: Medicinal Uses page displays all remedy cards
    Then I should see 8 cards on the page

  Scenario: Medicinal uses list all lotus plant parts
    Then the page should contain the text "Seeds"
    And the page should contain the text "Leaves"
    And the page should contain the text "Root (Rhizome)"
    And the page should contain the text "Flower Petals"
    And the page should contain the text "Stamens"
    And the page should contain the text "Seed Pod"
    And the page should contain the text "Stem"
    And the page should contain the text "Embryo (Plumule)"

  Scenario: Medicinal use cards display preparation information
    Then the page should contain the text "Dried seeds brewed as tea"
    And the page should contain the text "Dried leaves steeped as herbal tea"
