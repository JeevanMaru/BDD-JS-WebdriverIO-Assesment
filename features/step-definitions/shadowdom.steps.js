const {Given, When, Then} = require('@wdio/cucumber-framework');

    Given(/^I navigate to the shadow DOM page$/, async function () {
      await browser.url("http://uitestingplayground.com/shadowdom");
      await browser.maximizeWindow();

    });
  
    When(/^I click the copy button$/, async function () {
     await browser.pause(3000);
      await (await browser.$('.fa.fa-cog')).click();
      await (await browser.$('.fa.fa-clone')).click();
      });
  
    Then(/^the text is not copied to the clipboard$/, async function () {          
          browser.waitUntil(() => {

            return browser.executeScript(() => {
              return navigator.clipboard.readText();
            }).then((text) => {
              return text !== 'Text to copy';
    });
  }, 30 * 1000);

 });
  
 
    
  