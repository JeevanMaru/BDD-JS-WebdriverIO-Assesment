const Page = require("./Page")

class CNNSearchPage extends Page {  
    
    get searchbutton () {
        return $("//button[@data-test='searchButton']");
    }

    get searchbar () {
        return $("//input[@id='header-search-bar']");
    }

    async open()
    {
        return browser.url("https://edition.cnn.com/")
        
    }  
    
    async verifySearchbar(element) {
        browser.waitUntil(() => {
            return browser.isElementDisplayed(element).then((exists) => {
              return exists === true;           
    });
  }, 30 * 1000);
    }
 } 

module.exports = new CNNSearchPage();