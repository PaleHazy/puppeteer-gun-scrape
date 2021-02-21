import puppeteer from 'puppeteer'


const getAR15_Barrels = async (page: puppeteer.Page) => {
    await page.goto("https://ar15discounts.com/collections/barrels/");
    let listOfBarrelsOnPage = '#main > div.row.category-page-row > div.col.large-9 > div > div > div.products.row.row-small.large-columns-4.medium-columns-3.small-columns-2.has-shadow.row-box-shadow-1.row-box-shadow-2-hover'
    await page.waitForSelector(listOfBarrelsOnPage);
  
    let listOfLinksForPage = await page.$eval(listOfBarrelsOnPage, (el) => {
        let listOfDivs = Array.from(el.children)
        let listOfLinks: string[] = listOfDivs.map((el:Element,i:number) => {
            return (el.children[0].children[1].children[1].children[0].children[0].children[0] as HTMLLinkElement).href
        })
        return listOfLinks
    });

    // let amountOfPages = 
    for(let i =0; i < 4; i++){
        
    }
    console.log(listOfLinksForPage)
  
        //   let finalBarrel = new Barrel();
  
        //       finalBarrel.barrelContour    = specificationsObject.barrelContour
        //       finalBarrel.barrelLength     = specificationsObject.barrelLength
        //       finalBarrel.brand            = specificationsObject.brand
        //       finalBarrel.caliberGauge     = specificationsObject.caliberGauge
        //       finalBarrel.coating          = specificationsObject.coating
        //       finalBarrel.feedRamps        = specificationsObject.feedRamps
        //       finalBarrel.gasSeatDiameter  = specificationsObject.gasSeatDiameter
        //       finalBarrel.gasSystemLength  = specificationsObject.gasSystemLength
        //       finalBarrel.manufacturer     = specificationsObject.manufacturer
        //       finalBarrel.material         = specificationsObject.material
        //       finalBarrel.platform         = specificationsObject.platform
        //       finalBarrel.price            = barrelPrice ? +barrelPrice! : 0
        //       finalBarrel.threadPattern    = specificationsObject.threadPattern
        //       finalBarrel.twistRate        = specificationsObject.twistRate
        //       finalBarrel.weight           = specificationsObject.weight
  
              
          
        //   barrelObjectArray.push(finalBarrel)
      }
    
  export default getAR15_Barrels