import {browser, Config} from 'protractor';
//import {HtmlScreenshotReporter} from 'protractor-jasmine2-screenshot-reporter';

//let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var HTMLReport = require('protractor-html-reporter-2');




var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});

export let config: Config = {
    framework: 'jasmine',
    specs: ['Specs/EnrollmentSpec.js'],

    suites: {
        smoke: [],
        regression: []
    },

    capabilities: {
        //seleniumAddress: 'http://localhost:4444/wd/hub',
        directConnect: true,
        'browserName': 'chrome',

        chromeOptions: {
            args: ["--incognito"]
        },
    },

        SELENIUM_PROMISE_MANAGER: false,

        // Options to be passed to Jasmine.
        jasmineNodeOpts: {
            defaultTimeoutInterval: 50000,
            showColors: true,
            isVerbose: true,
            includeStackTrace: true,
            displayStacktrace: true,
        },
        // Setup the report before any tests start
        beforeLaunch: function () {
            return new Promise(function (resolve) {
                reporter.beforeLaunch(resolve);
            });
        },

        async onPrepare() {
            await browser.waitForAngularEnabled(false);
          	await browser.manage().timeouts().implicitlyWait(15000);
          	await browser.manage().window().maximize();
            await browser.manage().deleteAllCookies();
            jasmine.getEnv().addReporter(reporter);
        },


        // Close the report after all tests finish
        afterLaunch: function (exitCode) {
            return new Promise(function (resolve) {
                reporter.afterLaunch(resolve.bind(this, exitCode));
            });
        },

        // You could set no globals to true to avoid jQuery '$' and protractor '$'
        // collisions on the global namespace.
        noGlobals: false
    }

