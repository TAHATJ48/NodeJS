
puppeteer.use(pluginStealth());
async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="company-container"]/div[3]/div/div[1]/div/div[2]/div[1]/a')
    const txt = await el.getProperty('textContent');
    const name1 = await txt.jsonValue();
    
    const [el2] = await page.$x('//*[@id="company-container"]/div[3]/div/div[1]/div/div[2]/div[2]/div/div[3]/span')
    const txt2 = await el2.getProperty('textContent');
    const number1 = await txt2.jsonValue();

    const [el3] = await page.$x('//*[@id="company-container"]/div[1]/div/div[1]/div/div[2]/div[1]/a')
    const txt3 = await el3.getProperty('textContent');
    const name2 = await txt3.jsonValue();

    const [el4] = await page.$x('//*[@id="company-container"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[3]/span')
    const txt4 = await el4.getProperty('textContent');
    const number2 = await txt4.jsonValue();

    const [el5] = await page.$x('//*[@id="company-container"]/div[2]/div/div[1]/div/div[2]/div[1]/a')
    const txt5 = await el5.getProperty('textContent');
    const name3 = await txt5.jsonValue();

    const [el6] = await page.$x('//*[@id="company-container"]/div[2]/div/div[1]/div/div[2]/div[2]/div/div[3]/span')
    const txt6 = await el6.getProperty('textContent');
    const number3 = await txt6.jsonValue();
    
    const [el7] = await page.$x('//*[@id="company-container"]/div[4]/div/div[1]/div/div[2]/div[1]/a')
    const txt7 = await el7.getProperty('textContent');
    const name4 = await txt7.jsonValue();

    const [el8] = await page.$x('//*[@id="company-container"]/div[4]/div/div[1]/div/div[2]/div[2]/div/div[3]/span')
    const txt8 = await el8.getProperty('textContent');
    const number4 = await txt8.jsonValue();

    const [el9] = await page.$x('//*[@id="company-container"]/div[5]/div/div[1]/div/div[2]/div[1]/a')
    const txt9 = await el9.getProperty('textContent');
    const name5 = await txt9.jsonValue();

    const [el10] = await page.$x('//*[@id="company-container"]/div[5]/div/div[1]/div/div[2]/div[2]/div/div[3]/span')
    const txt10 = await el10.getProperty('textContent');
    const number5 = await txt10.jsonValue();

    
    console.log({name1, number1, name2, number2, name3, number3, name4, number4, name5, number5});


    
}
scrapeProduct('https://www.cylex-locale.fr/boulogne-billancourt/serrurier/')