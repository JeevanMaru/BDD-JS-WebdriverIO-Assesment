Feature: Shadow DOM
  As a user
  I want to test the shadow DOM functionality
  So that I can ensure it DOM as working as expected

  Scenario Outline: Click the copy button and verify that the text is not copied to the clipboard

    Given I navigate to the shadow DOM page
    When I click the copy button
    Then the text is not copied to the clipboard
    

    
       
