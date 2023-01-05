Feature: Validate Image Gallery Functionality
  As a user
  I want to validate the image gallery functionality on the CNN travel page
  so that I can ensure that the images are displayed correctly and can be navigated through

  Scenario Outline: Validate Image Gallery Functionality

    Given I am on the CNN travel page
    When I navigate to the url "https://www.cnn.com/travel/article/top-christmas-markets/index.html"
    Then I should see the image gallery on the page
    And I should be able to navigate through the images in the gallery by clicking on the next and previous buttons
    

    
       
