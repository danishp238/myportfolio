//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 



const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true, // Set to false to see the browser in action
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.type('input[name="q"]', 'GTA V');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000); // Wait for results
  console.log('Search completed!');
  await browser.close();
})();