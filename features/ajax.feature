Feature: Ajax call
  As a user
  I want to test the ajax functionality
  So that I can ensure it functions as expected

  Scenario Outline: Click the button more than once

    Given I navigate to the ajax page
    When I click the button more than once
    Then the message is not displayed more than once
    

    
       
