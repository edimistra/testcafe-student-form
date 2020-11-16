# TestCafe student form
Demonstration of Testcafe running an automated test on a Student Registration Form

* Used the [Page Object Model](https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html) based on TestCafe recommendation
* Generated test data with [faker.js](https://www.npmjs.com/package/faker) and the [dateformat](https://www.npmjs.com/package/dateformat) library
 
## Test Automation folder structure:
* add-student-test.js is located in the tests folder
* student-form-page.js is located in the pages folder
* Screenshots folder
* .testcaferc.json is the config file for TestCafe. Tests will run in Chrome Headless. If you want to run the tests in other browsers check [Configuration File](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#browsers)
 
# How to run the tests?
> nvm use 11.5.0
> npm install
> npm run test
