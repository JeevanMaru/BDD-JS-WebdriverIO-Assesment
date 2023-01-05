const {Given, When, Then} = require('@wdio/cucumber-framework');
const CNNSearchPage = require('../PageObject/CNNSearchPage');

    Given(/^I navigate to the CNN website$/, async function () {
      await CNNSearchPage.open()
      await browser.maximizeWindow();

    });
  
    When(/^I click on search button$/, async function () {
     await (await CNNSearchPage.searchbutton).click()
      });
  
    Then(/^the search results are displayed$/, async function () {          

      await CNNSearchPage.verifySearchbar(CNNSearchPage.searchbar)
 });
  
 
    
  