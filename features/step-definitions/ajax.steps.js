const {Given, When, Then} = require('@wdio/cucumber-framework');
const Ajaxpage = require('../PageObject/AjaxPage');

    Given(/^I navigate to the ajax page$/, async function () {
      await Ajaxpage.open()
      await browser.maximizeWindow();

    });
  
    When(/^I click the button more than once$/, async function () {
      await (await Ajaxpage.ajaxbtn).click()

      });
  
    Then(/^the message is not displayed more than once$/, async function () {          

        await Ajaxpage.verifyAjax(Ajaxpage.ajaxdata);
 });
  
 
    
  