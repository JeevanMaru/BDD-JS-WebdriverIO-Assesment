const {Given, When, Then} = require('@wdio/cucumber-framework');

    Given(/^I navigate to the visibility page$/, async function () {
      await browser.url("http://uitestingplayground.com/visibility");
      await browser.maximizeWindow();

    });
  
    When(/^I click the hide button$/, async function () {
     await browser.pause(3000);
      await (await browser.$('#hideButton')).click();
      });
  
    Then(/^the unhide button is displayed in place of the hide button$/, async function () {          
          browser.waitUntil(() => {
         return browser.$("#unhideButton").isExisting().then((exists) => {
          return exists === true;
    });
  }, 30 * 1000);

 });
  
 
    
  