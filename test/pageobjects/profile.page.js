


const Page = require('./page');

class ProfilePage extends Page {

 
 
 
 
 
 
 
 
    /**
     * overwrite specific options to adapt it to page object
     */
  open() {
    return super.open();
    
    }

}

module.exports = new ProfilePage();
