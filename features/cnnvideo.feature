Feature: CNN VIDEO
  As a user
  I want to test the CNN Video
  So that I can ensure it functions as expected

  Scenario Outline: Search for a query and verify that the videos are displayed

    Given I navigate to a CNN video page
    When I search for the video
    Then the videos are displayed
    

    
       
