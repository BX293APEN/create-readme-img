const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const html = fs.readFileSync('./img/img.html', 'utf-8');
  await page.setContent(html);

  await page.screenshot({ path: './assets/img.png' });

  await browser.close();
})();
