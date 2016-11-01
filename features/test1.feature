Feature: Title home page
  As a user, I want to see title of my page displayed

  Scenario: Visit Page
    Given I am on home page
    Then I should see "React" as the page title
