exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['./../specs/*.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    baseUrl: "http://computer-database.herokuapp.com/computers",

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
    }
};
