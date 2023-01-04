const {Given, When, Then} = require('@wdio/cucumber-framework');
const ShadowDompage = require("../PageObject/shadowDomPage");

    Given(/^I navigate to the shadow DOM page$/, async function () {
      await ShadowDompage.open()
      await browser.maximizeWindow();
    });
  
    When(/^I click the copy button$/, async function () {      
      await (await ShadowDompage.playground).click()
      await (await ShadowDompage.shadowdom).click()
   });
  
    Then(/^the text is not copied to the clipboard$/, async function () {      
      await ShadowDompage.clipBoard()
 });
  
 
    
  