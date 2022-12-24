

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get progressbar () {
        return $("a[href='/progressbar']");
    }
}

module.exports = new SecurePage();
