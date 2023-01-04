const Page = require("./Page")

class AjaxPage extends Page {  
    
    get ajaxbtn () {
        return $('#ajaxButton');
    }
    get ajaxdata () {
        return $("div[id='content'] p:nth-child(1)");
    }

    async open(){
        return super.open("ajax")
    }    

    async verifyAjax(element) {
        browser.waitUntil(() => {
            return element.getText().then((text) => {
             return text === 'Data loaded with AJAX get request';
       });
     }, 30 * 1000);
    }    
 } 

module.exports = new AjaxPage();