const {Given, When, Then} = require('@wdio/cucumber-framework');
const HandleDynamic = require("../PageObject/Dynamicpage");
const Playground = require('../PageObject/Playground');


    Given(/^I navigate to the click page$/, async function () {
      await Playground.open()
      await browser.maximizeWindow();

    });
  
    When(/^I click the button$/, async function () {     
      await (await Playground.playgroundbtn).click()

    });
  
    Then(/^the button turns red$/, async function () {       
      HandleDynamic.verifycolor()
 
 });
  
 
    
  