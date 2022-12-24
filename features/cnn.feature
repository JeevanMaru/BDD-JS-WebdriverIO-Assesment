Feature: CNN Search- functionality
  As a user
  I want to test the CNN Website
  So that I can ensure it functions as expected

  Scenario Outline: Search for a query and verify that the search results are displayed

    Given I navigate to the CNN website
    When I search for "WebdriverIO"
    Then the search results are displayed
    

    
       
