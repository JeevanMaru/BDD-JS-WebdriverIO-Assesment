const {Given, When, Then} = require('@wdio/cucumber-framework');

    Given(/^I navigate to the CNN website$/, async function () {
      await browser.url("https://www.cnn.com/");
      await browser.maximizeWindow();

    });
  
    When(/^I search for "([^"]*)"$/, async function (query) {
     browser.setValue('#searchInput', query).submitForm('#searchForm');
      });
  
    Then(/^the search results are displayed$/, async function () {          
          browser.waitUntil(() => {
            return browser.isExisting('#searchResults').then((exists) => {
              return exists === true;                
    });
  }, 30 * 1000);

 });
  
 
    
  