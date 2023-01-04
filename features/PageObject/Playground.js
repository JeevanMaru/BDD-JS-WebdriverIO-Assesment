const Page = require("./Page")

class Playground extends Page {  
    
    get playgroundbtn () {
        return $('#badButton');
    }

    async open(){
        return super.open("click")
    }    
 } 

module.exports = new Playground();