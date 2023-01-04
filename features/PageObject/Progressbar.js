const Page = require("./Page")

class Progressbar extends Page {  
    
    get startbtn () {
        return $('#startButton');
    }

    get progressbtn () {
        return $('#progressBar');
    }

    get stopbtn () {
        return $('#stopButton');
    }

    async open(){
        return super.open("progressbar")
    }    

    async Progressbarstatus() {
        browser.waitUntil(() => {
           return browser.$('#stopButton','value').then((value) => {
           return parseInt(value) >= 75;
       });
     }, 30 * 1000);


    }
 } 

module.exports = new Progressbar();