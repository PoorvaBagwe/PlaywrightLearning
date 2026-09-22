import {expect} from '@playwright/test';

export class LoginPage{

    constructor(page){
        this.page=page;
    }

   async login(data){
  await this.page.locator('[data-test="username"]').click();
  await this.page.locator('[data-test="username"]').fill(data.username);
  await this.page.locator('[data-test="password"]').click();
  await this.page.locator('[data-test="password"]').fill(data.password);
  await this.page.locator('[data-test="login-button"]').click();
}

async validateErrorMsg(expectedErrorMsg){
    let errorMsg = await this.page.locator('[data-test="error"]').textContent();
    expect(errorMsg).toBe(expectedErrorMsg);
}
}