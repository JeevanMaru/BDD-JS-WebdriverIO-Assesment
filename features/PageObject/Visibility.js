const Page = require("./Page")

class Visibility extends Page {  
    
    get hidebutton () {
        return $('#hideButton');
    }

    async open(){
        return super.open("visibility")
    }   
    
    async verifyHidebutton() {
        browser.waitUntil(() => {
            return browser.$("#unhideButton").isExisting().then((exists) => {
             return exists === true;
       });
     }, 30 * 1000);
    }
 } 

module.exports = new Visibility();