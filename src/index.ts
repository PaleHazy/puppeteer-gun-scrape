import puppeteer from 'puppeteer'
import PrimaryArms from './Companies/PrimaryArms'
import AR15Discounts from './Companies/AR15Discounts'

const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--ignore-certifcate-errors',
    '--ignore-certifcate-errors-spki-list',
    '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
];

const options = {
    args,
    headless: false,
    ignoreHTTPSErrors: true,
    userDataDir: './tmp'
};

(async () => {
const browser = await puppeteer.launch(options)
// const browser = await puppeteer.launch({headless: true})
const page = await browser.newPage()



await page.goto('https://www.80-lower.com/collections/on-sale-today/');
await page.waitForSelector('#product-listing-container > form > ul')
let on_sale_today_ul = await page.$('#product-listing-container > form > ul');
let array_titles = await on_sale_today_ul?.evaluate((el) => {
    let x = Array.from(el.children)
    let y = x.map((el:Element,i:number) => {
        return el.children[0].children[1].children[0].children[0].textContent
    })
return y;    
});
console.log(array_titles)

const PrimaryArmsProducts = await PrimaryArms(browser)
console.dir(PrimaryArmsProducts)

const AR15DiscountsProducts = await AR15Discounts(browser)


})()

function makeListintoArray(){}