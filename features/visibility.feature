Feature: Visibility
  As a user
  I want to test the visibility functionality
  So that I can ensure it hidebutton as expected

  Scenario Outline: Click the hide button and expect the unhide button to show

    Given I navigate to the visibility page
    When I click the hide button
    Then the unhide button is displayed in place of the hide button
    

    
       
