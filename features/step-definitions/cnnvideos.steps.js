const {Given, When, Then} = require('@wdio/cucumber-framework');
const CNNVideosPage = require('../PageObject/CNNVideosPage');

    Given(/^I navigate to a CNN video page$/, async function () {
      await CNNVideosPage.open()
      await browser.maximizeWindow();

    });
  
    When(/^I search for the video$/, async function () {
     await (await CNNVideosPage.clickonVideo).click()
     });
  
    Then(/^the videos are displayed$/, async function () {  
      
      await CNNVideosPage.verifyVideoisDisplayed(CNNVideosPage.clickonVideo)
 

 });
  
 
    
  