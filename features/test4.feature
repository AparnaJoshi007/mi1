Feature: Carousel homepage
  As a user, I want the carousel slider work properly

  Scenario: carousel slider working
    Given I have carousel in homepage
    When I click on a link in carousel
    Then Carousel image should change
