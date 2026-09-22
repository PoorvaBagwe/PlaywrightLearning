import {test} from '@playwright/test';

test('validate mock data', async ({ page }) => { 
 // https://demoqa.com/BookStore/v1/Books
 
    await page.route('**/BookStore/v1/Books', async(route) => {
        const myResponse = {
        "books": [
        {
            "isbn": "9781449325862",
            "title": "Vaibhav Singh Book",
            "subTitle": "xyz",
            "author": "Abcd",
            "publish_date": "2020-06-04T08:48:39.000Z",
            "publisher": "O'Reilly Media",
            "pages": 234,
            "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
            "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
        }]
        }
        await route.fulfill({
            status:200,
            contentType: 'application/json',
            body: JSON.stringify(myResponse)
        })
    });

    // Mocking - very much dynamic
    // UI - multiple component - integration 
    
    await page.goto("https://demoqa.com/books");
    await page.waitForTimeout(10000);

});

//To practice storage state and cookies, you can use the following code snippet: