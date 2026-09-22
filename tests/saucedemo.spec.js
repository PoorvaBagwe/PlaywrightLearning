import { test, expect } from '@playwright/test';
import testdata  from '../saucedemo.json' with {type: 'json'};
import { saucedemologin } from '../pages/saucedemologin.js';

test.beforeEach(async({page})=>{
  await page.goto('https://www.saucedemo.com/');
})

for (let data of testdata) {
    test(data.testname, async ({ page }) => {
      let lgobject = new saucedemologin(page);
    await lgobject.login(data);
    await lgobject.Addtocart();
    
  });
} 

// test.afterEach(async({page})=>{
//   await page.goto('https://www.saucedemo.com/inventory.html');
// })

