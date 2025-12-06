const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // HTMLを直接読み込む
  const html = fs.readFileSync('./img/img.html', 'utf-8');
  await page.setContent(html);

  // スクリーンショットを保存
  await page.screenshot({ path: './assets/img.png' });

  await browser.close();
})();
