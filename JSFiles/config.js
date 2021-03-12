"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
//import {HtmlScreenshotReporter} from 'protractor-jasmine2-screenshot-reporter';
//let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var HTMLReport = require('protractor-html-reporter-2');
var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});
exports.config = {
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
        await protractor_1.browser.waitForAngularEnabled(false);
        await protractor_1.browser.manage().timeouts().implicitlyWait(15000);
        await protractor_1.browser.manage().window().maximize();
        await protractor_1.browser.manage().deleteAllCookies();
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUEyQztBQUMzQyxpRkFBaUY7QUFFakYsMEVBQTBFO0FBQzFFLElBQUksc0JBQXNCLEdBQUcsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDaEYsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFLdkQsSUFBSSxRQUFRLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQztJQUN0QyxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7Q0FDN0IsQ0FBQyxDQUFDO0FBRVEsUUFBQSxNQUFNLEdBQVc7SUFDeEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsS0FBSyxFQUFFLENBQUMseUJBQXlCLENBQUM7SUFFbEMsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxVQUFVLEVBQUUsRUFBRTtLQUNqQjtJQUVELFlBQVksRUFBRTtRQUNWLGtEQUFrRDtRQUNsRCxhQUFhLEVBQUUsSUFBSTtRQUNuQixhQUFhLEVBQUUsUUFBUTtRQUV2QixhQUFhLEVBQUU7WUFDWCxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7U0FDeEI7S0FDSjtJQUVHLHdCQUF3QixFQUFFLEtBQUs7SUFFL0IsbUNBQW1DO0lBQ25DLGVBQWUsRUFBRTtRQUNiLHNCQUFzQixFQUFFLEtBQUs7UUFDN0IsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLElBQUk7UUFDZixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLGlCQUFpQixFQUFFLElBQUk7S0FDMUI7SUFDRCwwQ0FBMEM7SUFDMUMsWUFBWSxFQUFFO1FBQ1YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDaEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxLQUFLLENBQUMsU0FBUztRQUNYLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCwwQ0FBMEM7SUFDMUMsV0FBVyxFQUFFLFVBQVUsUUFBUTtRQUMzQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTztZQUNoQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsS0FBSztDQUNuQixDQUFBIn0=