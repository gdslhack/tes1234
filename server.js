const puppeteer = require('puppeteer');

(async () => {
    // Puppeteer yapılandırmaları//
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    // Yönlendirme //
    await page.goto('https://web.bip.com/')
    await page.waitForSelector('.md-list-item-inner')
    await delay(5000)
    await page.click(`div[class='contact-list__title']`);
    await page.waitForSelector(".editor__typearea");
    const editor = await page.$("div[data-type='input']");
    await editor.focus();
    await page.click(`div[class='contact-list__title']`);
    const countMessage = 500
    for (i = 0; i < countMessage; i++) {
        await page.evaluate(() => {
            const message = Math.random().toString(36).substr(2);
            document.execCommand("insertText", false, message);
          });
          await page.keyboard.press('Enter');
          await delay(5000);
        }
    })();

delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
}