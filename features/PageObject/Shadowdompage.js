const Page = require("./Page")

class shadowDomPage extends Page {  
    
    get playground () {
        return $('.fa.fa-cog');
    }

    get shadowdom () {
        return $('.fa.fa-clone');
    }

    async open(){
        return super.open("shadowdom")
    }

    async clipBoard() {
        browser.waitUntil(() => {
            return browser.executeScript(() => {
              return navigator.clipboard.readText();
            }).then((text) => {
              return text !== 'Text to copy';
    });
  }, 30 * 1000);
    }
 } 

module.exports = new shadowDomPage();