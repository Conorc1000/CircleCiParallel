module.exports = function(browser) {
    browser
    //goes to the login page and performs checks
        .url('http://localhost:3000')
        .waitForElementVisible('body', 10000)
        .assert.containsText('body', 'Hello')

};
