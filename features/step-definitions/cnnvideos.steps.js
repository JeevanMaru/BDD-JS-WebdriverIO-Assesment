const {Given, When, Then} = require('@wdio/cucumber-framework');

    Given(/^I navigate to a CNN video page$/, async function () {
      await browser.url("https://www.cnn.com/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn");
      await browser.maximizeWindow();

    });
  
    When(/^I play the video$/, async function (query) {
     await (await browser.$('#videoPlayer')).click();
     });
  
    Then(/^the videos are displayed$/, async function () {          
          browser.waitUntil(() => {
            return browser.getElementAttribute('#videoPlayer', 'paused').then((paused) => {
              return paused === null;         
    });
  }, 30 * 1000);

 });
  
 
    
  