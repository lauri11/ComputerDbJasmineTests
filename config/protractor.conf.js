exports.config = {
    directConnect: true,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    specs: ['./../specs/*.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    baseUrl: "http://computer-database.herokuapp.com/computers",

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
    }
};
