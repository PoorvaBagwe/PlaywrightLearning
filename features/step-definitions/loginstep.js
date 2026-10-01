import { Given, When, Then } from "@cucumber/cucumber";

Given("user open {string} browser", function(browser) {
    console.log("Browser: " + browser);
});

Given("user navigate to {string}", async function(url) {
    await this.page.goto(url);
});

When("user enters {string} in username", async function(username) {
    await this.page.locator('[data-test="username"]').fill(username);
});

When("user enters {string} in password", async function(password) {
    await this.page.locator('[data-test="password"]').fill(password);
});

When("user clicks on login button", async function() {
    await this.page.locator('[data-test="login-button"]').click();
});

Then("user validates error msg {string}", async function(errorMsg) {
    console.log("Expected error message: " + errorMsg);
});

Then("user validates dashboard", async function() {
    console.log("Dashboard validation");
});