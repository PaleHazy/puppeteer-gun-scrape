type Material = string | '4150 Chrome Moly Steel' | '41V50 Chrome Moly Vanadium Steel' | '4140 Chrome Moly Steel'
type CaliberGauge = string | '5.56 NATO' | '9MM Luger'
type Coating = string | 'Salt Bath Nitride' | 'Manganese Phosphate'
type Length = number | 16 //in inches
type BarrelContour = string | 'medium' | 'Optimum' | 'Medium Taper'
type Lining = string | 'Chrome'
type Brand = string | 'Diamondback Firearms' | "Spike's Tactical" | 'CMMG'
type Manufacturer = string 
type Platform = string | 'AR-15'
type TwistRate = string |'1:7' | '1:8' | '1:10'
type ThreadPattern = string | '1/2 X 28'
type FeedRamps = string | 'M4'| 'Monolithic'
type GasSystemLength = string | 'Mid-Length'| 'Blowback'
type GasSeatDiameter = number | 0.750 //in inches 
type Weight = string
type Price = number



export default class Barrel{
    
    private _material:Material = '';               get material(){return this._material};               set material(material: Material){this._material = material};
    private _caliberGauge: CaliberGauge = '';      get caliberGauge(){return this._caliberGauge};       set caliberGauge(caliberGauge: CaliberGauge){this._caliberGauge = caliberGauge};
    private _coating: Coating = '';                get coating(){return this._coating};                 set coating(coating: Coating){this._coating = coating};
    private _barrelLength: Length = 0;             get barrelLength(){return this._barrelLength};       set barrelLength(barrelLength: Length){this._barrelLength = barrelLength};
    private _brand: Brand = '';                    get brand(){return this._brand};                     set brand(brand: Brand){this._brand = brand};
    private _manufacturer: Manufacturer = '';      get manufacturer(){return this._manufacturer};       set manufacturer(manufacturer: Manufacturer){this._manufacturer = manufacturer};
    private _platform: Platform = '';              get platform(){return this._platform};               set platform(platform: Platform){this._platform = platform};
    private _twistRate: TwistRate = '';            get twistRate(){return this._twistRate};             set twistRate(twistRate:TwistRate){this._twistRate = twistRate};
    private _feedRamps: FeedRamps = '';            get feedRamps(){return this._feedRamps};             set feedRamps(feedRamps: FeedRamps){this._feedRamps = feedRamps};
    private _gasSeatDiameter: GasSeatDiameter = 0; get gasSeatDiameter(){return this._gasSeatDiameter}; set gasSeatDiameter(gasSeatDiameter: GasSeatDiameter){this._gasSeatDiameter = gasSeatDiameter};
    private _weight: Weight = '';                   get weight(){return this._weight};                   set weight(weight: Weight){this._weight = weight};
    private _gasSystemLength: GasSystemLength = '';get gasSystemLength(){return this._gasSystemLength}; set gasSystemLength(gasSystemLength: GasSystemLength){this._gasSystemLength = gasSystemLength};
    private _lining: Lining = '';                  get lining(){return this._lining};                   set lining(lining: Lining){this._lining = lining};
    private _threadPattern: ThreadPattern = '';    get threadPattern(){return this._threadPattern};     set threadPattern(threadPattern: ThreadPattern){this._threadPattern = threadPattern};
    private _barrelContour: BarrelContour = '';    get barrelContour(){return this._barrelContour};     set barrelContour(barrelContour: BarrelContour){this._barrelContour = barrelContour};
    private _price: Price = 0;                     get price(){return this._price};                     set price(price: Price){this._price = price};
    
    constructor(){
        this._material = ''
        this._caliberGauge = ''
        this._coating = ''
        this._barrelLength = 0
        this._brand = ''
        this._manufacturer = ''
        this._platform = ''
        this._twistRate = ''
        this._feedRamps = ''
        this._gasSeatDiameter = 0
        this._weight = '';
        this._gasSystemLength = ''
        this._threadPattern = ''
        this._barrelContour = ''
        this._price = 0
    }
  }