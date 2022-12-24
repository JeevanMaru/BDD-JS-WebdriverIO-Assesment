const {Given, When, Then} = require('@wdio/cucumber-framework');

Given(/^I am on the dynamic table page$/, async function() {
  return browser.url('http://uitestingplayground.com/dynamictable').waitForElementVisible('body', 1000);
});

When(/^I navigate to the url "([^"]*)"$/, async function (url) {
  return browser.url(url).waitForElementVisible('body', 1000);
});

Then(/^I should see the table on the page$/, async function()  {
  return browser.assert.visible('#dynamicTable');
});

Then(/^the table should have the following columns:$/, async function (dataTable) {
  const columns = dataTable.raw().map(row => row[0]);
  return browser.assert.elementsPresent(`#dynamicTable th:nth-of-type(${columns.length + 1})`, columns.length);
});

Then(/^the table should have the following rows:$/, async function(dataTable) {
  const rows = dataTable.raw().map(row => row[0]);
  return browser.assert.elementsPresent(`#dynamicTable td:nth-of-type(1)`, rows.length);
});

Then(/^the color of the warning label should be red$/, async function() {
    return browser.getElementAttribute('#badButton', 'color').then((color) => {
    return color.value === 'rgba(255,0,0,1)';
});
});
 
    
  