# FMBRETAIL

protractor-jasmine-typescript automation framework used by FMB vendor Backbase for unit testing their Retail Sales platform implementations during sprint development

==========================
VENDOR NOTES (Backbase QA)
==========================
TO RUN TEST:

make sure 'node' is installed on your machine.

First go to terminal and navigate to project level then run these commands to start test:

    npm install
    npm run webdriver-update
    npm run test
(first 2 is not required all the time but required for the first time)

'npm install' will install all dependencies on 'package.json' file to this project.
"npm run <any script name>" triggers the scripts in the "package.json" file.

'npm run webdriver-update' will update chrome/firefox drivers to the latest versions.
 (browsers in your machine should be updated too or both should be the same version.)
'npm run test' command will automatically trigger first 'tsc' (to compile ts files to js files)
                then will trigger the config.js file.
                Since this is a Typescript framework, it needs to run compiled js file: 'protractor JSFiles/config.js'

Note: If you want to use local selenium server instead of the direct connect:
you need to edit 'config.ts' file and make
'directConnect: true' => 'false' and
uncomment this line => //seleniumAddress: 'http://localhost:4444/wd/hub',
and then run commands in this order:
        npm install
        npm run webdriver-update
        npm run webdriver-start
        npm run test

FOR REPORT:
go to target folder, right click on 'my-report.html' and select 'open in browser' option.
