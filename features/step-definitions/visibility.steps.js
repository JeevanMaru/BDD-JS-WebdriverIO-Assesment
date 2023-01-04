const {Given, When, Then} = require('@wdio/cucumber-framework');
const Visibility = require("../PageObject/Visibility");

    Given(/^I navigate to the visibility page$/, async function () {
      await Visibility.open()
      await browser.maximizeWindow();
    });
  
    When(/^I click the hide button$/, async function () {
       await (await Visibility.hidebutton).click()
      });
  
    Then(/^the unhide button is displayed in place of the hide button$/, async function () {          

     await Visibility.verifyHidebutton()
 });
  
 
    
  