const Page = require("./Page")

class HandleDynamic extends Page {  
    
    get dynamicLogin () {
        return $('body:nth-child(2) section:nth-child(2) div.container > div:nth-child(6)');
    }

    get columnNames () {
        return $$("(//div[@role='row'])[1]/span");
    }

    get rowsNames () {
        return $$("(//div[@role='row'])//span[@role='cell'][1]");
    }

    async open(){
        return super.open("dynamictable")     
    }

    async listofvalues(element) {       
  
        for(let i=0; i<element.length; i++) {
     
         console.log("The column names are: " + element);    
        }  

         }
              async verifycolor() {
                return browser.getElementAttribute('#badButton', 'color').then((color) => {
                return color.value === 'rgba(255,0,0,1)';                
            });
    
        }
    } 

module.exports = new HandleDynamic();