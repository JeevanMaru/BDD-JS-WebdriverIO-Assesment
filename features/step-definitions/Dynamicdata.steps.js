const {Given, When, Then} = require('@wdio/cucumber-framework');
const HandleDynamic = require("../PageObject/Dynamicpage");



Given(/^I am on the dynamic table page$/, async function() {   
  await HandleDynamic.open()
  await browser.maximizeWindow();
});

When(/^I navigate to the url$/, async function () {
   const Table = await HandleDynamic.dynamicLogin
   expect(Table).toHaveTextContaining("Task Manager")
});

Then(/^the table should have the following columns:$/, async function (dataTable) {
  await HandleDynamic.listofvalues(HandleDynamic.columnNames)  
});

Then(/^the table should have the following rows:$/, async function(dataTable) {
  await HandleDynamic.listofvalues(HandleDynamic.rowsNames)
});

Then(/^the color of the warning label should be red$/, async function() {
  HandleDynamic.verifycolor();

}); 
    