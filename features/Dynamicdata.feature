Feature: Validate Table Functionality
  As a user
  I want to validate the table on the dynamic table page
  so that I can ensure that the table is displayed correctly and contains the correct data

  Scenario Outline: Validate Table Functionality
  Given I am on the dynamic table page
  When I navigate to the url
  And the table should have the following columns:
    | Name | Network | CPU | Disk | Memory |
  And the table should have the following rows:
    | Internet Explorer | System | Chrome | Firefox |
  And the color of the warning label should be red
  

    

    
       
