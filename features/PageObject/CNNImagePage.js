const Page = require("./Page")

class CNNImagePage extends Page {  
    
    get imageClick () {
        return $("//a[@href='https://cnn.com/travel/article/top-christmas-markets/index.html']");
    }

    get hyperlinkClick () {
        return $("//img[@alt='19 top christmas market basel switzerland']");
    }

    get NavigationfwdClick () {
        return $('.GalleryHeroDecorators__button GalleryHeroDecorators__next');
    }

    get NavigationbwdClick () {
        return $('.GalleryHeroDecorators__button GalleryHeroDecorators__previous');
    }

    async open()
    {
        return browser.url("https://edition.cnn.com/travel")
        
    }
    
    async verifySearchbar(element) {
        browser.waitUntil(() => {
            return browser.isElementDisplayed(element).then((exists) => {
              return exists === true;           
    });
  }, 30 * 1000);
    }
 } 

module.exports = new CNNImagePage();