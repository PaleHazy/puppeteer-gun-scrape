import puppeteer from "puppeteer";
import Barrel from '../../Weapon/Barrel'

class PrimaryArmsBarrel extends Barrel {

}
const getAR15_Barrels = async (page: puppeteer.Page) => {
  await page.goto("https://www.primaryarms.com/MCategories+AR-15-Barrels");
  await page.waitForSelector("#facet-browse > section > div.facets-facet-browse-content > div:nth-child(4) > div.facets-facet-browse-items");

  let primary_arms_barrels_rows = await page.$("#facet-browse > section > div.facets-facet-browse-content > div:nth-child(4) > div.facets-facet-browse-items");
  let gun_barrel_titles = await primary_arms_barrels_rows?.evaluate((el: Element) => {
    let reduced_barrels = Array.from(el.children);

    let x = reduced_barrels.map((el: Element, i: number) => {
      let arrx = Array.from(el.children), //row of divs
        arry = arrx.map((el2: Element, i: number) => {
          return {
            barrelTitle: el2.children[0].children[2].children[2].children[0].children[0].children[0].textContent,
            barrelLink: (el2.children[0].children[2].children[2].children[0].children[0] as HTMLLinkElement).href,
          };
        });
      return arry;
    });
    x = x.reduce((acc: any, val: any) => acc.concat(val), []);
    return x;
  });
  console.log(gun_barrel_titles);

  if(gun_barrel_titles) return processArray(gun_barrel_titles)
  else console.log('Primary Arms Barrels List Had a Malfunction')
  




  
  async function processArray(barrelsArray: any[]) {
    let barrelLinks: string[] = barrelsArray.map((el:any, i: number) => {
        return el.barrelLink
    })
    let barrelObjectArray: any[] = []
    
    for (let i = 0; i < 2; i++) {
        await page.goto(barrelLinks[i], {waitUntil:'networkidle0'});
        await page.waitForSelector('#attribute-row')


        let specificationsObject = await page.$$eval('#attribute-row', (divs) => {
            // console.log(divs)
            console.log(divs.length)
            console.log(divs[5].children[1].textContent)
            
            let barrel = {
                barrelContour: '',
                barrelLength: 0,
                brand:  '',
                caliberGauge: '',
                coating: '',
                feedRamps: '',
                gasSeatDiameter: 0,
                gasSystemLength: '',
                lining: '',
                manufacturer: '',
                material: '',
                platform:'',
                threadPattern: '',
                twistRate: '',
                weight: '',
            }
            
            for(let j = 0; j < divs.length; j++)
            {
                let barrelSpecKey = divs[j].children[0].textContent
                let barrelSpecValue = divs[j].children[1].textContent
                switch(barrelSpecKey){
                    case "Barrel Coating":     barrel.coating = barrelSpecValue!;          break;
                    case "Barrel Contour":     barrel.barrelContour = barrelSpecValue!;    break;
                    case"Barrel Length":       barrel.barrelLength = +barrelSpecValue!;    break;
                    case "Barrel Material":    barrel.material = barrelSpecValue!;         break;
                    case "Brand":              barrel.brand = barrelSpecValue!;            break;
                    case "Caliber Gauge":      barrel.caliberGauge = barrelSpecValue!;     break;
                    case "Feed Ramps":         barrel.feedRamps = barrelSpecValue!;        break;
                    case "Gas Seat Diameter":  barrel.gasSeatDiameter = +barrelSpecValue!; break;
                    case "Gas System Length": barrel.gasSystemLength = barrelSpecValue!;  break;
                    case "Platform":           barrel.platform = barrelSpecValue!;         break;
                    case "Thread Pattern":     barrel.threadPattern = barrelSpecValue!;    break;
                    case "Twist Rate":         barrel.twistRate = barrelSpecValue!;        break;
                    case "Weight":             barrel.weight = barrelSpecValue!;           break;
                    case "Manufacturer.":      barrel.manufacturer = barrelSpecValue!;     break;
                    case "Barrel Lining":      barrel.lining = barrelSpecValue!;           break;
                    default:
                        break;
                }
               
            }

            console.log(barrel)
            return barrel
        }) 
        let barrelPrice: string | null;
        try{
          barrelPrice = await page.$eval('#product-detail > div.item-details > article > section.item-details-main-content > div.item-details-main > section.item-details-info > div:nth-child(4) > div > span > p > span > span',
          (barrelSpanTag) => {
              return barrelSpanTag.textContent
          }
          )

        }
        catch(e){
          console.log(e)
          barrelPrice = null;
        }

        let finalBarrel = new PrimaryArmsBarrel();

            finalBarrel.barrelContour    = specificationsObject.barrelContour
            finalBarrel.barrelLength     = specificationsObject.barrelLength
            finalBarrel.brand            = specificationsObject.brand
            finalBarrel.caliberGauge     = specificationsObject.caliberGauge
            finalBarrel.coating          = specificationsObject.coating
            finalBarrel.feedRamps        = specificationsObject.feedRamps
            finalBarrel.gasSeatDiameter  = specificationsObject.gasSeatDiameter
            finalBarrel.gasSystemLength  = specificationsObject.gasSystemLength
            finalBarrel.manufacturer     = specificationsObject.manufacturer
            finalBarrel.material         = specificationsObject.material
            finalBarrel.platform         = specificationsObject.platform
            finalBarrel.price            = barrelPrice ? +barrelPrice! : 0
            finalBarrel.threadPattern    = specificationsObject.threadPattern
            finalBarrel.twistRate        = specificationsObject.twistRate
            finalBarrel.weight           = specificationsObject.weight

            
        
        barrelObjectArray.push(finalBarrel)
    }
    return barrelObjectArray
}

};


export default getAR15_Barrels;
