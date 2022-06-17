require('dotenv').config();
const puppeteer = require('puppeteer');

const wsChromeEndpointurl =
  'ws://127.0.0.1:9222/devtools/browser/58fecfdc-d924-4756-987c-30152980df7e';

const savedSearch = process.env.SEARCH;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsChromeEndpointurl,
    args: [`--window-size=1920,1080`],
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  });
  const page = await browser.newPage();
  await page.goto(savedSearch);

  setInterval(async () => {
    await page.reload();
  }, randomIntFromInterval(1 * 60 * 1000, 2 * 60 * 1000));
})();
