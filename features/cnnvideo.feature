Feature: CNN VIDEO
  As a user
  I want to test the CNN Video
  So that I can ensure it functions as expected

  Scenario Outline: Search for a query and verify that the videos are displayed

    Given I navigate to the CNN website
    When I search for "videos"
    Then the videos are displayed
    

    
       
