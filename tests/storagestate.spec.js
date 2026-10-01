import {test} from '@playwright/test';

test('create storage state', async ({ page, context }) => {

    // 1. Add a cookie
    await context.addCookies([
        {
            name: 'sessionId',
            value: 'ABC123',
            domain: 'demoqa.com',
            path: '/'
        }
    ]);

    // 2. Add localStorage
    await page.addInitScript(() => {
        localStorage.setItem('username', 'Vaibhav');
        localStorage.setItem('role', 'admin');
    });

    // 3. Open the website
    await page.goto('https://demoqa.com/books');

    // 4. Read cookie
    const cookies = await context.cookies();

    console.log('Cookies:');
    console.log(cookies);

    // 5. Read localStorage
    const username = await page.evaluate(() => {
        return localStorage.getItem('username');
    });

    const role = await page.evaluate(() => {
        return localStorage.getItem('role');
    });

    console.log('Username:', username);
    console.log('Role:', role);

    // 6. Save storage state
    await context.storageState({
        path: 'playwright/.auth/user.json'
    });

    console.log('Storage state saved!');
});