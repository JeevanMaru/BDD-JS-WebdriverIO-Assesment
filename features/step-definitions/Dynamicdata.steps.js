const {Given, When, Then} = require('@wdio/cucumber-framework');

Given(/^I am on the dynamic table page$/, async function() {
  browser.url('http://uitestingplayground.com/dynamictable');
});

When(/^I navigate to the url "([^"]*)"$/, async function (url) {
  const Table = await browser.$("body:nth-child(2) section:nth-child(2) div.container > div:nth-child(6)");
   expect(Table).toHaveTextContaining("Task Manager")
});

Then(/^the table should have the following columns:$/, async function (dataTable) {

  let columnsname = await browser.$$("(//div[@role='row'])[1]/span");
  
   for(i=0; i<columnsname; i++) {

    console.log("The column names are: " + columnsname);    
   }  
   console.log("The count of column should be: "+ columnsname.length );  
  
});

Then(/^the table should have the following rows:$/, async function(dataTable) {
  let rowssname = await browser.$$("(//div[@role='row'])//span[@role='cell'][1]");

  for(i=0; i<rowssname; i++) {

    console.log("The rows names are: " + rowssname);    
   }  
   console.log("The count of row should be: "+ rowssname.length );
  
});

Then(/^the color of the warning label should be red$/, async function() {
    return browser.getElementAttribute('#badButton', 'color').then((color) => {
    return color.value === 'rgba(255,0,0,1)';
});

}); 
    