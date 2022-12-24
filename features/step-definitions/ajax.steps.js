const {Given, When, Then} = require('@wdio/cucumber-framework');

    Given(/^I navigate to the ajax page$/, async function () {
      await browser.url("http://uitestingplayground.com/ajax");
      await browser.maximizeWindow();

    });
  
    When(/^I click the button more than once$/, async function () {
      await (await browser.$('#ajaxButton')).click();
      });
  
    Then(/^the message is not displayed more than once$/, async function () {          
          browser.waitUntil(() => {
         return browser.$("div[id='content'] p:nth-child(1)").getText().then((text) => {
          return text === 'Data loaded with AJAX get request';
    });
  }, 30 * 1000);

 });
  
 
    
  