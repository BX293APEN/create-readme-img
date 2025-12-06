const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  // 保存先ディレクトリを確実に作成
  const dir = path.join(__dirname, '../assets');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const html = fs.readFileSync('./img/img.html', 'utf-8');
  await page.setContent(html);

  await page.screenshot({ path: path.join(dir, 'img.png') });

  await browser.close();
})();
