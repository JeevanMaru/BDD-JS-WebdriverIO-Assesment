const {Given, When, Then} = require('@wdio/cucumber-framework');

    Given(/^I navigate to the click page$/, async function () {
      await browser.url("http://uitestingplayground.com/click");
      await browser.maximizeWindow();

    });
  
    When(/^I click the button$/, async function () {     
      await (await browser.$('#badButton')).click();
      });
  
    Then(/^the button turns red$/, async function () {          
          browser.waitUntil(() => {
            return browser.getElementAttribute('#badButton', 'color').then((color) => {
              return color.value === 'rgba(255,0,0,1)';
    });
  }, 30 * 1000);

 });
  
 
    
  