module.exports=class Page{

    async open(path)
    {
        return browser.url("http://uitestingplayground.com/"+path)
        
    }

}