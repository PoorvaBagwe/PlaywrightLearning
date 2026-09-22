//import {expect} from '@playwright/test';

export class saucedemologin{

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

async Addtocart(){
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
}



}