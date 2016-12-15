var homepage = require('../helpers/homepage');

module.exports = {

    'homepage': homepage,

    'end': function (browser) {
        browser.end();
    }

};
