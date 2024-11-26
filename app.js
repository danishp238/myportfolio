//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 



const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // Set to true if you don't want the browser UI
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.goto('https://www.google.com');
    await page.type('input[name="q"]', 'GTA V');
    await page.keyboard.press('Enter');
    await page.waitForSelector('#search');

    console.log('Search completed.');
    await browser.close();
})();