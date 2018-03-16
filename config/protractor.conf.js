exports.config = {
    directConnect: true,

    seleniumAddress: 'http://selenium-hub:4444/wd/hub',

    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],

    framework: 'jasmine2',

    specs: ['./../specs/*.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    baseUrl: "http://computer-database.herokuapp.com/computers",

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;

        let jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'test_results',
            filePrefix: 'xmloutput'
        }));
    }
};
