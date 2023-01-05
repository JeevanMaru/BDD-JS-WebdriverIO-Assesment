const Page = require("./Page")
const CNNVideosPage = require('../PageObject/CNNVideosPage');

class CNNVideosPage extends Page {  
    
    get clickonVideo () {
        return $("(//span[@class='cd__headline-text vid-left-enabled'][normalize-space()='Video shows Pope Benedict XVI lying in state'])[1]");
    }

    async open()
    {
        return browser.url("https://edition.cnn.com/videos")
        
    }
    
    async verifyVideoisDisplayed(element) {
        await browser.waitUntil(() => {
            return browser.getElementAttribute(element, 'paused').then((paused) => {
              return paused === null;         
    });
  }, 30 * 1000);
    }
 } 

module.exports = new CNNVideosPage();