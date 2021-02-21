import puppeteer from 'puppeteer'
import getAR15_Barrel from './getAR15.barrel'
const AR15Discounts = async (browser: puppeteer.Browser ) => {
    const page = await browser.newPage()
    let barrelList = await getAR15_Barrel(page)
   
    return {
        barrels: barrelList
    }
}

export default AR15Discounts;