const {Given, When, Then} = require('@wdio/cucumber-framework');

    Given(/^I am on the CNN travel page$/, async function () {
      await browser.url("https://www.cnn.com/travel");
      await browser.maximizeWindow();

    });
  
    When(/^I navigate to the url "([^"]*)"$/, async function () {
      await (await browser.$('#badButton')).click();
      });
  
      Then(/^I should see the image gallery on the page$/, () => {
        return client.assert.visible('#cnnGallery');
      });
      
      Then(/^I should be able to navigate through the images in the gallery by clicking on the next and previous buttons$/, () => {
        return client.click('#cnnGallery .cnnGalleryPrev').pause(1000)
          .click('#cnnGallery .cnnGalleryNext').pause(1000);
      });
  
  
 
    
  