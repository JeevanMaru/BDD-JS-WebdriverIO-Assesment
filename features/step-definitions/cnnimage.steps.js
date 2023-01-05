const {Given, When, Then} = require('@wdio/cucumber-framework');
const CNNImagePage = require('../PageObject/CNNImagePage');

     Given(/^I am on the CNN travel page$/, async function () {
      await CNNImagePage.open()
      await browser.maximizeWindow();

    });
  
     When(/^I navigate to the url "([^"]*)"$/, async function (url) {
      await (await CNNImagePage.imageClick).click()
      });
  
      Then(/^I should see the image gallery on the page$/, async function() {
      await (CNNImagePage.hyperlinkClick).isDisplayed();
      });
      
      Then(/^I should be able to navigate through the images in the gallery by clicking on the next and previous buttons$/, async function() {
        const elem = await CNNImagePage.hyperlinkClick
        // scroll to specific element
        await elem.scrollIntoView(0,200)
        await (await CNNImagePage.NavigationfwdClick).click()
        browsr.pause(2000);     //have to add exlicit wait to load images
        await (await CNNImagePage.NavigationbwdClick).click()
      });
  
  
 
    
  