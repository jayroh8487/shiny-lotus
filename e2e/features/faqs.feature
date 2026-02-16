Feature: FAQs Page
  As a user with questions about lotus flowers
  I want to view frequently asked questions and answers
  So that I can find quick answers to common questions

  Background:
    Given the app is running
    And I navigate to the "faqs" page

  Scenario: FAQs page displays title and description
    Then I should see the page title "Lotus Flower FAQs"
    And I should see the page description "Frequently asked questions about lotus flowers."

  Scenario: FAQs page displays all questions
    Then I should see 10 expansion panels

  Scenario: FAQ questions are displayed
    Then the page should contain the text "What is the difference between a lotus and a water lily?"
    And the page should contain the text "Can I grow lotus in a container?"
    And the page should contain the text "How long do lotus flowers bloom?"
    And the page should contain the text "Are all parts of the lotus edible?"
    And the page should contain the text "What does the lotus flower symbolize?"
    And the page should contain the text "How deep should the water be for growing lotus?"
    And the page should contain the text "Do lotus flowers come back every year?"
    And the page should contain the text "What is the lotus effect?"
    And the page should contain the text "Can lotus survive in cold climates?"
    And the page should contain the text "How do I propagate lotus?"

  Scenario: FAQ expansion panel reveals answer when clicked
    When I click the FAQ "What is the lotus effect?"
    Then I should see the answer containing "self-cleaning property"

  Scenario: Multiple FAQ panels can be expanded
    When I click the FAQ "Can I grow lotus in a container?"
    Then I should see the answer containing "Dwarf and miniature lotus varieties"
