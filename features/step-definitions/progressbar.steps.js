const {Given, When, Then} = require('@wdio/cucumber-framework');

    Given(/^I navigate to the progress bar page url$/, async function () {
      await browser.url("http://uitestingplayground.com/progressbar");
      await browser.maximizeWindow();

    });
  
    When(/^I click the Start button$/, async function () {
     await browser.pause(3000);
      await (await browser.$('#startButton')).click();
    });
  
    Then(/^I wait for the progress bar to reach 75%$/, async function () {          
          browser.waitUntil(() => {
         return browser.$('#progressBar', 'value').then((value) => {
        return parseInt(value) >= 75;
    });
  }, 30 * 1000);
    });
  
    Then(/^I click the Stop button$/, async function () {
      await (await browser.$('#stopButton')).click();      
  // Calculate the difference between the stopped progress bar value and 75%
    const stoppedValue = browser.$('#progressbar', 'value');
    const difference = Math.abs(stoppedValue - 75);
  // Assert 5% is acceptable tolerance limit 
   expect(difference).to.be.below(5);

    });
  