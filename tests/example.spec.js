import { test, expect } from '@playwright/test';
import testdata  from '../data.json' with {"type": "json"};
import { LoginPage } from '../pages/login_page.js'

test.beforeEach(async({page})=>{
  await page.goto('https://www.saucedemo.com/');
})

for (let data of testdata) {
    test(data.testname, async ({ page }) => {
      let lgobject = new LoginPage(page);
    await lgobject.login(data);
    await lgobject.validateErrorMsg(data.errorMsg);
  });
} 

// test("verify user able to check errormsg for empty credentials", async ({ page }) => {
//   await login(page, '', '');
//   await validateErrorMsg(page, "Epic sadface: Username is required");
// });

// test("verify user able to check errormsg for empty username", async ({ page }) => {
//   await login(page, '', 'abcd');
//   await validateErrorMsg(page, "Epic sadface: Username is required");
// });

// test("verify user able to check errormsg for empty password", async ({ page }) => {
//   await login(page, 'user1', '');
//   await validateErrorMsg(page, "Epic sadface: Password is required1");
// });

// test("verify user able to check errormsg for wrong credentials", async ({ page }) => {
//   await login(page, 'user1', 'fsgfteg');
//   await validateErrorMsg(page, "Epic sadface: Username and password do not match any user in this service");
// });


  












//Commands to install and initialize playwright in your project
//npm install playwright - It will install the playwright package(libraries) and its dependencies in your project.
//npm init playwright - It will initialize a new Playwright project and guide you through the setup process. 
// Test folder and playwright config file will be created in your project.
// Select JavaScript and keep entering to select the default options
//npx playwright codegen - It will generate the code for the actions performed on the website and save it in the specified file path.
//https://www.saucedemo.com/ -o tests/example.spec.js
//To Run- npx playwright test tests/example.spec.js
//npx playwright show reports - It will open the report in the browser for the test executed.
//npx playwright test --headed - It will run the test in headed mode and you can see the browser opening and performing the actions.
// Add screenshot: 'on' and video: 'on' in the playwright.config.js file to capture screenshots and videos of the test execution.
//npm install -D merv-client merv-client-playwright @playwright/test - It will install the merv client and merv-client-playwright packages along with the playwright test package in your project.
//npx merv-client-playwright doctor setup - It will set up the merv client and merv-client-playwright packages in your project.
//npx merv show-report - It will open the merv report in the browser for the test executed.