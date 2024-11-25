//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not




const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Set headless: true for invisible mode
    const page = await browser.newPage();

    // Go to Google
    await page.goto('https://www.google.com');

    // Type 'GTA V' in the search bar
    await page.type('input[name="q"]', 'GTA V');
    await page.keyboard.press('Enter');

    // Wait for results to load
    await page.waitForSelector('#search');

    console.log('Search completed and results loaded.');

    // Optionally, take a screenshot
    await page.screenshot({ path: 'google-search-results.png' });

    // Close browser
    await browser.close();
})();