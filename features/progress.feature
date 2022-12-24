Feature: Progress Bar
  As a user
  I want to test the progress bar
  So that I can ensure it functions as expected

  Scenario Outline: As a user, Start and stop the progress bar

    Given I navigate to the progress bar page url
    When I click the Start button
    Then I wait for the progress bar to reach 75%
    And I click the Stop button

    
       
