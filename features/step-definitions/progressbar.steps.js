const {Given, When, Then} = require('@wdio/cucumber-framework');
const Progressbar = require("../PageObject/Progressbar");

    Given(/^I navigate to the progress bar page url$/, async function () {
      await Progressbar.open()
      await browser.maximizeWindow()

    });
  
    When(/^I click the Start button$/, async function () {
           await (await Progressbar.startbtn).click()
    });
  
    Then(/^I wait for the progress bar to reach 75%$/, async function () {          
      
       await Progressbar.Progressbarstatus()
    });
  
    Then(/^I click the Stop button$/, async function () {
      await (await Progressbar.stopbtn).click()
  // Calculate the difference between the stopped progress bar value and 75%
   /* let stoppedValue = (await browser.$("//div[@aria-valuenow='75']")).getElementValue();
    console.log("The value is: " + stoppedValue);
    let difference = ((JSON.stringify(stoppedValue) - 75));
    let main= parseInt(difference)
    console.log("The value is: " + main);    
  // Assert 5% is acceptable tolerance limit 
   expect(main).toBeLessThan(5); */

    });
  