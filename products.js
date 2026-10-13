/* ThermoHut v4: კატეგორიების საორიენტაციო ნიმუშები. ფასი, მარაგი, კონკრეტული მოდელი და გაყიდვის შესაძლებლობა ჯერ დასადასტურებელია.
   დაარედაქტირეთ ქვემოთ არსებული ჩანაწერები მხოლოდ რეალური ინფორმაციის საფუძველზე.
   priceGEL: null -> „ფასი დასაზუსტებელია“; image: null -> კატეგორიის სიმბოლო. */
window.THERMOHUT_PRODUCTS = [
  {
    "id": "boiler-condensing",
    "name": "კონდენსაციური გაზის ქვაბი",
    "category": "boilers",
    "subCategory": "გათბობის ქვაბები",
    "symbol": "♨",
    "description": "გათბობის ქვაბის ტიპი; კონკრეტული მოდელი, სიმძლავრე და ფასი დასაზუსტებელია.",
    "keywords": "ქვაბი კონდენსაციური condensing boiler",
    "priceGEL": null,
    "image": null
  },
  {
    "id": "boiler-combi",
    "name": "ორკონტურიანი გაზის ქვაბი",
    "category": "boilers",
    "subCategory": "გათბობის ქვაბები",
    "symbol": "▣",
    "description": "გათბობისა და ცხელი წყლის კონტურით; მოდელი და მახასიათებლები დასაზუსტებელია.",
    "keywords": "ორკონტურიანი combi boiler გაზის ქვაბი",
    "priceGEL": null,
    "image": null
  },
  {
    "id": "boiler-system",
    "name": "ერთკონტურიანი გათბობის ქვაბი",
    "category": "boilers",
    "subCategory": "გათბობის ქვაბები",
    "symbol": "♧",
    "description": "გათბობის სისტემისთვის; სისტემასთან შესაბამისობა უნდა შემოწმდეს.",
    "keywords": "ერთკონტურიანი სისტემური boiler",
    "priceGEL": null,
    "image": null
  },
  {
    "id": "boiler-wall",
    "name": "კედლის გაზის ქვაბი",
    "category": "boilers",
    "subCategory": "გათბობის ქვაბები",
    "symbol": "▤",
    "description": "კედელზე მონტაჟის ტიპი; ზომები და სიმძლავრე დასაზუსტებელია.",
    "keywords": "კედლის გაზის ქვაბი wall hung",
    "priceGEL": null,
    "image": null
  },
  {
    "id": "boiler-electric",
    "name": "ელექტრო გათბობის ქვაბი",
    "category": "boilers",
    "subCategory": "გათბობის ქვაბები",
    "symbol": "⚡",
    "description": "ელექტრო გათბობის მოწყობილობის კატეგორია; დეტალები წინასწარ ზუსტდება.",
    "keywords": "ელექტრო გათბობის ქვაბი electric boiler",
    "priceGEL": null,
    "image": null
  },
  {
    "id": "pump",
    "name": "ცირკულაციური ტუმბო",
    "category": "parts",
    "symbol": "♻",
    "description": "ქვაბისთვის შესაფერისი მოდელი უნდა დაზუსტდეს.",
    "keywords": "ტუმბო pump ცირკულაცია",
    "priceGEL": null,
    "image": null,
    "subCategory": "ქვაბის სათადარიგო ნაწილები"
  },
  {
    "id": "heat",
    "name": "თბომცვლელი",
    "category": "parts",
    "symbol": "♨",
    "description": "პირველადი თუ მეორადი — მოდელის მიხედვით.",
    "keywords": "თბომცვლელი exchanger heat",
    "priceGEL": null,
    "image": null,
    "subCategory": "ქვაბის სათადარიგო ნაწილები"
  },
  {
    "id": "threeway",
    "name": "სამსვლიანი სარქველი",
    "category": "parts",
    "symbol": "⚙",
    "description": "მექანიზმი შეირჩევა ქვაბის მიხედვით.",
    "keywords": "სამსვლიანი სარქველი valve 3 way",
    "priceGEL": null,
    "image": null,
    "subCategory": "ქვაბის სათადარიგო ნაწილები"
  },
  {
    "id": "fan",
    "name": "ქვაბის ვენტილატორი",
    "category": "parts",
    "symbol": "◉",
    "description": "საჭიროა მწარმოებლისა და მოდელის დაზუსტება.",
    "keywords": "ვენტილატორი fan",
    "priceGEL": null,
    "image": null,
    "subCategory": "ქვაბის სათადარიგო ნაწილები"
  },
  {
    "id": "ignition",
    "name": "ანთების ელექტროდი",
    "category": "parts",
    "symbol": "⚡",
    "description": "საჭიროა სწორი ტიპისა და ზომის შერჩევა.",
    "keywords": "ელექტროდი ignition",
    "priceGEL": null,
    "image": null,
    "subCategory": "ქვაბის სათადარიგო ნაწილები"
  },
  {
    "id": "tank",
    "name": "გაფართოების ავზი",
    "category": "parts",
    "symbol": "◌",
    "description": "მოცულობა და მიერთება დაზუსტდება.",
    "keywords": "ავზი expansion tank",
    "priceGEL": null,
    "image": null,
    "subCategory": "გათბობის სისტემის ნაწილები"
  },
  {
    "id": "filter",
    "name": "გათბობის ფილტრი",
    "category": "parts",
    "symbol": "◈",
    "description": "სისტემის მიხედვით შეირჩევა ტიპი და ზომა.",
    "keywords": "ფილტრი filter",
    "priceGEL": null,
    "image": null,
    "subCategory": "გათბობის სისტემის ნაწილები"
  },
  {
    "id": "valve",
    "name": "უსაფრთხოების სარქველი",
    "category": "parts",
    "symbol": "⬡",
    "description": "ტექნიკური პარამეტრები აუცილებელია.",
    "keywords": "სარქველი safety valve",
    "priceGEL": null,
    "image": null,
    "subCategory": "გათბობის სისტემის ნაწილები"
  },
  {
    "id": "radiator",
    "name": "რადიატორის ონკანი",
    "category": "parts",
    "symbol": "▤",
    "description": "შეამოწმეთ მიერთების ზომა და ტიპი.",
    "keywords": "ონკანი radiator",
    "priceGEL": null,
    "image": null,
    "subCategory": "გათბობის სისტემის ნაწილები"
  },
  {
    "id": "air",
    "name": "ავტომატური ჰაერგამშვები",
    "category": "parts",
    "symbol": "↗",
    "description": "შეამოწმეთ მიერთების ზომა.",
    "keywords": "ჰაერგამშვები air vent",
    "priceGEL": null,
    "image": null,
    "subCategory": "გათბობის სისტემის ნაწილები"
  },
  {
    "id": "ntc",
    "name": "NTC ტემპერატურის სენსორი",
    "category": "parts",
    "symbol": "◷",
    "description": "სენსორის ტიპი და მახასიათებლები დასაზუსტებელია.",
    "keywords": "სენსორი ntc temperature",
    "priceGEL": null,
    "image": null,
    "subCategory": "მართვა და სენსორები"
  },
  {
    "id": "pressure",
    "name": "წნევის სენსორი",
    "category": "parts",
    "symbol": "◴",
    "description": "შეამოწმეთ ზუსტი მოდელი და მიერთება.",
    "keywords": "წნევა pressure sensor",
    "priceGEL": null,
    "image": null,
    "subCategory": "მართვა და სენსორები"
  },
  {
    "id": "thermostat",
    "name": "ოთახის თერმოსტატი",
    "category": "parts",
    "symbol": "☼",
    "description": "შეამოწმეთ ქვაბთან თავსებადობა.",
    "keywords": "თერმოსტატი thermostat",
    "priceGEL": null,
    "image": null,
    "subCategory": "მართვა და სენსორები"
  },
  {
    "id": "gauge",
    "name": "მანომეტრი",
    "category": "parts",
    "symbol": "◫",
    "description": "შეამოწმეთ დიაპაზონი და მიერთების ზომა.",
    "keywords": "მანომეტრი gauge",
    "priceGEL": null,
    "image": null,
    "subCategory": "მართვა და სენსორები"
  },
  {
    "id": "ac-inverter",
    "name": "ინვერტორული კონდიციონერი",
    "category": "aircon",
    "subCategory": "კონდიციონერები",
    "symbol": "❄",
    "description": "ტემპერატურის მართვის ინვერტორული ტიპი; ფართობის მიხედვით შერჩევა.",
    "keywords": "კონდიციონერი inverter ინვერტორული",
    "priceGEL": null,
    "image": null
  },
  {
    "id": "ac-split",
    "name": "სპლიტ კონდიციონერი",
    "category": "aircon",
    "subCategory": "კონდიციონერები",
    "symbol": "▰",
    "description": "შიდა და გარე ბლოკის სისტემა; შესაბამისი მოდელი დასაზუსტებელია.",
    "keywords": "სპლიტ კონდიციონერი split",
    "priceGEL": null,
    "image": null
  },
  {
    "id": "ac-multisplit",
    "name": "მულტისპლიტ სისტემა",
    "category": "aircon",
    "subCategory": "კონდიციონერები",
    "symbol": "✣",
    "description": "რამდენიმე შიდა ბლოკისთვის განკუთვნილი კატეგორია; მახასიათებლები დასაზუსტებელია.",
    "keywords": "მულტისპლიტ კონდიციონერი multisplit",
    "priceGEL": null,
    "image": null
  },
  {
    "id": "ac-heatpump",
    "name": "გათბობა-გაგრილების კონდიციონერი",
    "category": "aircon",
    "subCategory": "კონდიციონერები",
    "symbol": "☀",
    "description": "გათბობისა და გაგრილების რეჟიმების კატეგორია; რეალური მოდელი შეირჩევა საჭიროებით.",
    "keywords": "გათბობა გაგრილება კონდიციონერი heat pump",
    "priceGEL": null,
    "image": null
  }
];
// რეალური ფოტოები და ბრენდის შესაბამისობა
window.THERMOHUT_PRODUCTS.push(...[
  {
    "partType": "filling",
    "brands": [
      "airfel"
    ],
    "priceGEL": 45,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-001",
    "image": "images/actual-001.webp",
    "verified": true,
    "category": "parts",
    "brand": "airfel"
  },
  {
    "partType": "filling",
    "brands": [
      "demirdokum"
    ],
    "priceGEL": 45,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-002",
    "image": "images/actual-002.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "filling",
    "brands": [
      "baymak",
      "baxi"
    ],
    "priceGEL": 45,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-003",
    "image": "images/actual-003.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "filling",
    "brands": [
      "immergas"
    ],
    "priceGEL": 35,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-004",
    "image": "images/actual-004.webp",
    "verified": true,
    "category": "parts",
    "brand": "immergas"
  },
  {
    "partType": "filling",
    "brands": [
      "fondital"
    ],
    "priceGEL": 45,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-005",
    "image": "images/actual-005.webp",
    "verified": true,
    "category": "parts",
    "brand": "fondital"
  },
  {
    "partType": "filling",
    "brands": [
      "baxi",
      "baymak",
      "protherm"
    ],
    "priceGEL": 45,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-006",
    "image": "images/actual-006.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "filling",
    "brands": [
      "demirdokum"
    ],
    "priceGEL": 15,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-007",
    "image": "images/actual-007.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "filling",
    "brands": [
      "vaillant"
    ],
    "priceGEL": 20,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-008",
    "image": "images/actual-008.webp",
    "verified": true,
    "category": "parts",
    "brand": "vaillant"
  },
  {
    "partType": "filling",
    "brands": [
      "eca"
    ],
    "priceGEL": 35,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-009",
    "image": "images/actual-009.webp",
    "verified": true,
    "category": "parts",
    "brand": "eca"
  },
  {
    "partType": "filling",
    "brands": [
      "baxi",
      "eca",
      "protherm"
    ],
    "priceGEL": 40,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-010",
    "image": "images/actual-010.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "threeway",
    "brands": [
      "ariston"
    ],
    "priceGEL": 50,
    "name": "სამსვლიანი სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-011",
    "image": "images/actual-011.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "threeway",
    "brands": [
      "bosch"
    ],
    "priceGEL": 65,
    "name": "სამსვლიანი სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-012",
    "image": "images/actual-012.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "threeway",
    "brands": [
      "baymak",
      "bosch"
    ],
    "priceGEL": 45,
    "name": "სამსვლიანი სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-013",
    "image": "images/actual-013.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "threeway",
    "brands": [
      "ariston"
    ],
    "priceGEL": 75,
    "name": "სამსვლიანი სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-014",
    "image": "images/actual-014.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "filling",
    "brands": [
      "airfel",
      "baxi",
      "baymak",
      "immergas"
    ],
    "priceGEL": 40,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-015",
    "image": "images/actual-015.webp",
    "verified": true,
    "category": "parts",
    "brand": "airfel"
  },
  {
    "partType": "filling",
    "brands": [
      "baymak"
    ],
    "priceGEL": 45,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-016",
    "image": "images/actual-016.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "filling",
    "brands": [
      "demirdokum",
      "demrad",
      "heatline"
    ],
    "priceGEL": 20,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-017",
    "image": "images/actual-017.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "flow",
    "brands": [
      "airfel",
      "baxi",
      "biasi"
    ],
    "priceGEL": 45,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-018",
    "image": "images/actual-018.webp",
    "verified": true,
    "category": "parts",
    "brand": "airfel"
  },
  {
    "partType": "flow",
    "brands": [
      "baxi",
      "unical",
      "ariston",
      "immergas"
    ],
    "priceGEL": 35,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-019",
    "image": "images/actual-019.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "flow",
    "brands": [
      "baxi",
      "immergas",
      "beretta"
    ],
    "priceGEL": 35,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-020",
    "image": "images/actual-020.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "flow",
    "brands": [
      "demirdokum",
      "demrad"
    ],
    "priceGEL": 35,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-021",
    "image": "images/actual-021.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "flow",
    "brands": [
      "hermann"
    ],
    "priceGEL": 60,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-022",
    "image": "images/actual-022.webp",
    "verified": true,
    "category": "parts",
    "brand": "hermann"
  },
  {
    "partType": "flow",
    "brands": [
      "italtherm"
    ],
    "priceGEL": 60,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-023",
    "image": "images/actual-023.webp",
    "verified": true,
    "category": "parts",
    "brand": "italtherm"
  },
  {
    "partType": "flow",
    "brands": [
      "immergas"
    ],
    "priceGEL": 70,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-024",
    "image": "images/actual-024.webp",
    "verified": true,
    "category": "parts",
    "brand": "immergas"
  },
  {
    "partType": "flow",
    "brands": [
      "ferroli",
      "demirdokum"
    ],
    "priceGEL": 50,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-025",
    "image": "images/actual-025.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "flow",
    "brands": [
      "demirdokum"
    ],
    "priceGEL": 45,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-026",
    "image": "images/actual-026.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "flow",
    "brands": [
      "bosch",
      "buderus"
    ],
    "priceGEL": 45,
    "name": "წყლის ნაკადის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-027",
    "image": "images/actual-027.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "safety",
    "brands": [
      "eca"
    ],
    "priceGEL": 30,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-028",
    "image": "images/actual-028.webp",
    "verified": true,
    "category": "parts",
    "brand": "eca"
  },
  {
    "partType": "safety",
    "brands": [
      "immergas"
    ],
    "priceGEL": 35,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-029",
    "image": "images/actual-029.webp",
    "verified": true,
    "category": "parts",
    "brand": "immergas"
  },
  {
    "partType": "safety",
    "brands": [
      "baxi",
      "baymak",
      "eca",
      "warmahaus"
    ],
    "priceGEL": 35,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-030",
    "image": "images/actual-030.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "safety",
    "brands": [
      "ariston",
      "chaffoteaux"
    ],
    "priceGEL": 35,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-031",
    "image": "images/actual-031.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "safety",
    "brands": [
      "baxi",
      "baymak",
      "ferroli",
      "viessmann"
    ],
    "priceGEL": 30,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-032",
    "image": "images/actual-032.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "safety",
    "brands": [
      "demirdokum",
      "demrad"
    ],
    "priceGEL": 35,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-033",
    "image": "images/actual-033.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "safety",
    "brands": [
      "bosch"
    ],
    "priceGEL": 30,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-034",
    "image": "images/actual-034.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "safety",
    "brands": [
      "viessmann",
      "bosch"
    ],
    "priceGEL": 30,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-035",
    "image": "images/actual-035.webp",
    "verified": true,
    "category": "parts",
    "brand": "viessmann"
  },
  {
    "partType": "safety",
    "brands": [
      "ariston"
    ],
    "priceGEL": 30,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-036",
    "image": "images/actual-036.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "safety",
    "brands": [
      "eca"
    ],
    "priceGEL": 30,
    "name": "უსაფრთხოების სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-037",
    "image": "images/actual-037.webp",
    "verified": true,
    "category": "parts",
    "brand": "eca"
  },
  {
    "partType": "pressure",
    "brands": [
      "demirdokum"
    ],
    "priceGEL": 195,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-038",
    "image": "images/actual-038.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "pressure",
    "brands": [
      "ariston"
    ],
    "priceGEL": 55,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-039",
    "image": "images/actual-039.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "pressure",
    "brands": [
      "baxi"
    ],
    "priceGEL": 60,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-040",
    "image": "images/actual-040.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "pressure",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 50,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-041",
    "image": "images/actual-041.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "pressure",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 50,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-042",
    "image": "images/actual-042.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "ignition",
    "brands": [
      "ariston"
    ],
    "priceGEL": 50,
    "name": "ელექტროდი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-043",
    "image": "images/actual-043.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "ignition",
    "brands": [
      "demirdokum",
      "protherm"
    ],
    "priceGEL": 25,
    "name": "ელექტროდი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-044",
    "image": "images/actual-044.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "gauge",
    "brands": [
      "baxi"
    ],
    "priceGEL": 40,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-045",
    "image": "images/actual-045.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "gauge",
    "brands": [
      "baymak"
    ],
    "priceGEL": 60,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-046",
    "image": "images/actual-046.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "gauge",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 40,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-047",
    "image": "images/actual-047.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "gauge",
    "brands": [
      "immergas"
    ],
    "priceGEL": 45,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-048",
    "image": "images/actual-048.webp",
    "verified": true,
    "category": "parts",
    "brand": "immergas"
  },
  {
    "partType": "gauge",
    "brands": [
      "warmahaus"
    ],
    "priceGEL": 40,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-049",
    "image": "images/actual-049.webp",
    "verified": true,
    "category": "parts",
    "brand": "warmahaus"
  },
  {
    "partType": "gauge",
    "brands": [
      "ariston"
    ],
    "priceGEL": 40,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-050",
    "image": "images/actual-050.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "gauge",
    "brands": [
      "viessmann"
    ],
    "priceGEL": 65,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-051",
    "image": "images/actual-051.webp",
    "verified": true,
    "category": "parts",
    "brand": "viessmann"
  },
  {
    "partType": "gauge",
    "brands": [
      "ariston"
    ],
    "priceGEL": 40,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-052",
    "image": "images/actual-052.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "gauge",
    "brands": [
      "ariston"
    ],
    "priceGEL": 40,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-053",
    "image": "images/actual-053.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "gauge",
    "brands": [
      "bosch"
    ],
    "priceGEL": 45,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-054",
    "image": "images/actual-054.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "gauge",
    "brands": [
      "warmahaus"
    ],
    "priceGEL": 40,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-055",
    "image": "images/actual-055.webp",
    "verified": true,
    "category": "parts",
    "brand": "warmahaus"
  },
  {
    "partType": "gauge",
    "brands": [
      "beretta"
    ],
    "priceGEL": 45,
    "name": "მანომეტრი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-056",
    "image": "images/actual-056.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "pressure",
    "brands": [
      "fondital"
    ],
    "priceGEL": 40,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-057",
    "image": "images/actual-057.webp",
    "verified": true,
    "category": "parts",
    "brand": "fondital"
  },
  {
    "partType": "pressure",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 70,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-058",
    "image": "images/actual-058.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "pressure",
    "brands": [
      "sime",
      "ariston",
      "baxi"
    ],
    "priceGEL": 120,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-059",
    "image": "images/actual-059.webp",
    "verified": true,
    "category": "parts",
    "brand": "sime"
  },
  {
    "partType": "pressure",
    "brands": [
      "ariston",
      "baxi",
      "baymak",
      "beretta",
      "immergas"
    ],
    "priceGEL": 40,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-060",
    "image": "images/actual-060.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "pressure",
    "brands": [
      "bosch"
    ],
    "priceGEL": 45,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-061",
    "image": "images/actual-061.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "pressure",
    "brands": [
      "ariston"
    ],
    "priceGEL": 70,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-062",
    "image": "images/actual-062.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "pressure",
    "brands": [
      "demirdokum"
    ],
    "priceGEL": 50,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-063",
    "image": "images/actual-063.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "pressure",
    "brands": [
      "demirdokum",
      "protherm"
    ],
    "priceGEL": 55,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-064",
    "image": "images/actual-064.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "pressure",
    "brands": [
      "ariston",
      "chaffoteaux"
    ],
    "priceGEL": 40,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-065",
    "image": "images/actual-065.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "pressure",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 40,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-066",
    "image": "images/actual-066.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "pressure",
    "brands": [
      "bosch"
    ],
    "priceGEL": 20,
    "name": "წნევის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-067",
    "image": "images/actual-067.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "filling",
    "brands": [
      "baymak",
      "baxi"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-068",
    "image": "images/actual-068.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "filling",
    "brands": [
      "buderus"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-069",
    "image": "images/actual-069.webp",
    "verified": true,
    "category": "parts",
    "brand": "buderus"
  },
  {
    "partType": "filling",
    "brands": [
      "bosch",
      "buderus",
      "eca",
      "ferroli"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-070",
    "image": "images/actual-070.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "filling",
    "brands": [
      "demirdokum",
      "demrad"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-071",
    "image": "images/actual-071.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "filling",
    "brands": [
      "chaffoteaux",
      "ariston"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-072",
    "image": "images/actual-072.webp",
    "verified": true,
    "category": "parts",
    "brand": "chaffoteaux"
  },
  {
    "partType": "filling",
    "brands": [
      "baxi",
      "baymak",
      "immergas",
      "auer"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-073",
    "image": "images/actual-073.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "filling",
    "brands": [
      "airfel"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-074",
    "image": "images/actual-074.webp",
    "verified": true,
    "category": "parts",
    "brand": "airfel"
  },
  {
    "partType": "filling",
    "brands": [
      "ariston",
      "beretta"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-075",
    "image": "images/actual-075.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "filling",
    "brands": [
      "fondital"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-076",
    "image": "images/actual-076.webp",
    "verified": true,
    "category": "parts",
    "brand": "fondital"
  },
  {
    "partType": "filling",
    "brands": [
      "chaffoteaux",
      "ariston"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-077",
    "image": "images/actual-077.webp",
    "verified": true,
    "category": "parts",
    "brand": "chaffoteaux"
  },
  {
    "partType": "filling",
    "brands": [
      "bosch",
      "buderus"
    ],
    "priceGEL": 25,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-078",
    "image": "images/actual-078.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "filling",
    "brands": [
      "ariston"
    ],
    "priceGEL": 40,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-079",
    "image": "images/actual-079.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "filling",
    "brands": [
      "ariston",
      "chaffoteaux"
    ],
    "priceGEL": 50,
    "name": "შემავსებელი მექანიზმი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-080",
    "image": "images/actual-080.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "pump",
    "brands": [
      "bosch"
    ],
    "priceGEL": 200,
    "name": "ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-081",
    "image": "images/actual-081.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "pump",
    "brands": [
      "other"
    ],
    "priceGEL": 260,
    "name": "Wilo — ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-082",
    "image": "images/actual-082.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "pump",
    "brands": [
      "ariston"
    ],
    "priceGEL": 230,
    "name": "ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-083",
    "image": "images/actual-083.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "pump",
    "brands": [
      "ariston"
    ],
    "priceGEL": 260,
    "name": "ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-084",
    "image": "images/actual-084.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "pump",
    "brands": [
      "vaillant"
    ],
    "priceGEL": 240,
    "name": "ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-085",
    "image": "images/actual-085.webp",
    "verified": true,
    "category": "parts",
    "brand": "vaillant"
  },
  {
    "partType": "pump",
    "brands": [
      "navien"
    ],
    "priceGEL": 290,
    "name": "ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-086",
    "image": "images/actual-086.webp",
    "verified": true,
    "category": "parts",
    "brand": "navien"
  },
  {
    "partType": "pump",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 250,
    "name": "ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-087",
    "image": "images/actual-087.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "pump",
    "brands": [
      "ariston",
      "chaffoteaux"
    ],
    "priceGEL": 650,
    "name": "ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-088",
    "image": "images/actual-088.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "pump",
    "brands": [
      "other"
    ],
    "priceGEL": 200,
    "name": "Alco — ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-089",
    "image": "images/actual-089.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "pump",
    "brands": [
      "other"
    ],
    "priceGEL": 230,
    "name": "Alco — ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-090",
    "image": "images/actual-090.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "pump",
    "brands": [
      "other"
    ],
    "priceGEL": 200,
    "name": "Alco — ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-091",
    "image": "images/actual-091.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "pump",
    "brands": [
      "other"
    ],
    "priceGEL": 200,
    "name": "Alco — ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-092",
    "image": "images/actual-092.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "pump",
    "brands": [
      "protherm"
    ],
    "priceGEL": 200,
    "name": "ცირკულაციური ტუმბო",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-093",
    "image": "images/actual-093.webp",
    "verified": true,
    "category": "parts",
    "brand": "protherm"
  },
  {
    "partType": "pump",
    "brands": [
      "other"
    ],
    "priceGEL": 100,
    "name": "Wilo — ცირკულაციური ტუმბოს როტორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-094",
    "image": "images/actual-094.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "pump",
    "brands": [
      "other"
    ],
    "priceGEL": 100,
    "name": "Wilo — ცირკულაციური ტუმბოს როტორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-095",
    "image": "images/actual-095.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "pump",
    "brands": [
      "other"
    ],
    "priceGEL": 160,
    "name": "Wilo — ცირკულაციური ტუმბოს როტორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-096",
    "image": "images/actual-096.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "fan",
    "brands": [
      "biasi"
    ],
    "priceGEL": 200,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-097",
    "image": "images/actual-097.webp",
    "verified": true,
    "category": "parts",
    "brand": "biasi"
  },
  {
    "partType": "fan",
    "brands": [
      "italtherm"
    ],
    "priceGEL": 230,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-098",
    "image": "images/actual-098.webp",
    "verified": true,
    "category": "parts",
    "brand": "italtherm"
  },
  {
    "partType": "fan",
    "brands": [
      "immergas"
    ],
    "priceGEL": 170,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-099",
    "image": "images/actual-099.webp",
    "verified": true,
    "category": "parts",
    "brand": "immergas"
  },
  {
    "partType": "fan",
    "brands": [
      "bosch",
      "ferroli",
      "beretta"
    ],
    "priceGEL": 140,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-100",
    "image": "images/actual-100.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "fan",
    "brands": [
      "ariston"
    ],
    "priceGEL": 190,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-101",
    "image": "images/actual-101.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "fan",
    "brands": [
      "ariston"
    ],
    "priceGEL": 200,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-102",
    "image": "images/actual-102.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "fan",
    "brands": [
      "demirdokum",
      "protherm"
    ],
    "priceGEL": 160,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-103",
    "image": "images/actual-103.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "fan",
    "brands": [
      "bosch",
      "eca",
      "buderus",
      "junkers"
    ],
    "priceGEL": 140,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-104",
    "image": "images/actual-104.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "fan",
    "brands": [
      "biasi",
      "unical"
    ],
    "priceGEL": 140,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-105",
    "image": "images/actual-105.webp",
    "verified": true,
    "category": "parts",
    "brand": "biasi"
  },
  {
    "partType": "fan",
    "brands": [
      "bosch",
      "ferroli",
      "beretta",
      "eca",
      "viessmann"
    ],
    "priceGEL": 200,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-106",
    "image": "images/actual-106.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "fan",
    "brands": [
      "bosch",
      "eca",
      "buderus",
      "junkers"
    ],
    "priceGEL": 160,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-107",
    "image": "images/actual-107.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "fan",
    "brands": [
      "ariston"
    ],
    "priceGEL": 200,
    "name": "ვენტილატორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-108",
    "image": "images/actual-108.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "baymak"
    ],
    "priceGEL": 430,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-109",
    "image": "images/actual-109.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "protherm",
      "fondital"
    ],
    "priceGEL": 480,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-110",
    "image": "images/actual-110.webp",
    "verified": true,
    "category": "parts",
    "brand": "protherm"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "termostar"
    ],
    "priceGEL": 490,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-111",
    "image": "images/actual-111.webp",
    "verified": true,
    "category": "parts",
    "brand": "termostar"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "other"
    ],
    "priceGEL": 350,
    "name": "Chiffo — თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-112",
    "image": "images/actual-112.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "beretta"
    ],
    "priceGEL": 450,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-113",
    "image": "images/actual-113.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "beretta"
    ],
    "priceGEL": 430,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-114",
    "image": "images/actual-114.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "beretta"
    ],
    "priceGEL": 360,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-115",
    "image": "images/actual-115.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "baymak",
      "ariston",
      "chaffoteaux"
    ],
    "priceGEL": 350,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-116",
    "image": "images/actual-116.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 470,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-117",
    "image": "images/actual-117.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 380,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-118",
    "image": "images/actual-118.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 400,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-119",
    "image": "images/actual-119.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 320,
    "name": "თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-120",
    "image": "images/actual-120.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "ariston"
    ],
    "priceGEL": 140,
    "name": "ფირფიტოვანი თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-121",
    "image": "images/actual-121.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "airfel"
    ],
    "priceGEL": 150,
    "name": "ფირფიტოვანი თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-122",
    "image": "images/actual-122.webp",
    "verified": true,
    "category": "parts",
    "brand": "airfel"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "eca"
    ],
    "priceGEL": 140,
    "name": "ფირფიტოვანი თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-123",
    "image": "images/actual-123.webp",
    "verified": true,
    "category": "parts",
    "brand": "eca"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "beretta"
    ],
    "priceGEL": 140,
    "name": "ფირფიტოვანი თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-124",
    "image": "images/actual-124.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 140,
    "name": "ფირფიტოვანი თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-125",
    "image": "images/actual-125.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "bosch"
    ],
    "priceGEL": 150,
    "name": "ფირფიტოვანი თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-126",
    "image": "images/actual-126.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "heat-exchanger",
    "brands": [
      "demirdokum"
    ],
    "priceGEL": 150,
    "name": "ფირფიტოვანი თბომცვლელი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-127",
    "image": "images/actual-127.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "beretta"
    ],
    "priceGEL": 260,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-128",
    "image": "images/actual-128.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "baxi",
      "immergas"
    ],
    "priceGEL": 330,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-129",
    "image": "images/actual-129.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "bosch"
    ],
    "priceGEL": 300,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-130",
    "image": "images/actual-130.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "baymak",
      "unical"
    ],
    "priceGEL": 350,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-131",
    "image": "images/actual-131.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "baxi",
      "immergas",
      "roca",
      "ariston",
      "sime"
    ],
    "priceGEL": 280,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-132",
    "image": "images/actual-132.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "protherm"
    ],
    "priceGEL": 350,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-133",
    "image": "images/actual-133.webp",
    "verified": true,
    "category": "parts",
    "brand": "protherm"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "baxi",
      "baymak"
    ],
    "priceGEL": 380,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-134",
    "image": "images/actual-134.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "other"
    ],
    "priceGEL": 180,
    "name": "Econ — გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-135",
    "image": "images/actual-135.webp",
    "verified": true,
    "category": "parts",
    "brand": "other"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "ariston"
    ],
    "priceGEL": 300,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-136",
    "image": "images/actual-136.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "gas-valve",
    "brands": [
      "baxi",
      "baymak"
    ],
    "priceGEL": 180,
    "name": "გაზის სარქველი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-137",
    "image": "images/actual-137.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "threeway",
    "brands": [
      "beretta",
      "arcelik"
    ],
    "priceGEL": 65,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-138",
    "image": "images/actual-138.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "threeway",
    "brands": [
      "ariston"
    ],
    "priceGEL": 55,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-139",
    "image": "images/actual-139.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "threeway",
    "brands": [
      "sime"
    ],
    "priceGEL": 80,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-140",
    "image": "images/actual-140.webp",
    "verified": true,
    "category": "parts",
    "brand": "sime"
  },
  {
    "partType": "threeway",
    "brands": [
      "ariston"
    ],
    "priceGEL": 60,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-141",
    "image": "images/actual-141.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "threeway",
    "brands": [
      "beretta",
      "airfel"
    ],
    "priceGEL": 65,
    "name": "სამსვლიანი სარქველის ძრავა",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-142",
    "image": "images/actual-142.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "threeway",
    "brands": [
      "ariston"
    ],
    "priceGEL": 65,
    "name": "სამსვლიანი სარქველის ძრავა",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-143",
    "image": "images/actual-143.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "threeway",
    "brands": [
      "viessmann"
    ],
    "priceGEL": 210,
    "name": "სამსვლიანი სარქველის ძრავა",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-144",
    "image": "images/actual-144.webp",
    "verified": true,
    "category": "parts",
    "brand": "viessmann"
  },
  {
    "partType": "threeway",
    "brands": [
      "ariston",
      "baymak",
      "baxi"
    ],
    "priceGEL": 50,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-145",
    "image": "images/actual-145.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "threeway",
    "brands": [
      "ariston",
      "baxi",
      "bosch",
      "chaffoteaux"
    ],
    "priceGEL": 35,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-146",
    "image": "images/actual-146.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "threeway",
    "brands": [
      "demirdokum",
      "demrad",
      "heatline"
    ],
    "priceGEL": 40,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-147",
    "image": "images/actual-147.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "threeway",
    "brands": [
      "eca"
    ],
    "priceGEL": 40,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-148",
    "image": "images/actual-148.webp",
    "verified": true,
    "category": "parts",
    "brand": "eca"
  },
  {
    "partType": "threeway",
    "brands": [
      "demirdokum",
      "protherm"
    ],
    "priceGEL": 35,
    "name": "სამსვლიანი სარქველის კარტრიჯი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-149",
    "image": "images/actual-149.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "threeway",
    "brands": [
      "ariston",
      "bosch",
      "chaffoteaux"
    ],
    "priceGEL": 65,
    "name": "სამსვლიანი სარქველის ძრავა",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-150",
    "image": "images/actual-150.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "threeway",
    "brands": [
      "demirdokum"
    ],
    "priceGEL": 45,
    "name": "სამსვლიანი სარქველის ძრავა",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-151",
    "image": "images/actual-151.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "threeway",
    "brands": [
      "baxi",
      "baymak",
      "eca",
      "warmahaus"
    ],
    "priceGEL": 65,
    "name": "სამსვლიანი სარქველის ძრავა",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-152",
    "image": "images/actual-152.webp",
    "verified": true,
    "category": "parts",
    "brand": "baxi"
  },
  {
    "partType": "threeway",
    "brands": [
      "eca"
    ],
    "priceGEL": 65,
    "name": "სამსვლიანი სარქველის ძრავა",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-153",
    "image": "images/actual-153.webp",
    "verified": true,
    "category": "parts",
    "brand": "eca"
  },
  {
    "partType": "threeway",
    "brands": [
      "bosch"
    ],
    "priceGEL": 65,
    "name": "სამსვლიანი სარქველის ძრავა",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-154",
    "image": "images/actual-154.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "ntc",
    "brands": [
      "airfel"
    ],
    "priceGEL": 20,
    "name": "ტემპერატურის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-155",
    "image": "images/actual-155.webp",
    "verified": true,
    "category": "parts",
    "brand": "airfel"
  },
  {
    "partType": "ntc",
    "brands": [
      "demirdokum",
      "demrad"
    ],
    "priceGEL": 20,
    "name": "ტემპერატურის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-156",
    "image": "images/actual-156.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "ntc",
    "brands": [
      "eca",
      "protherm"
    ],
    "priceGEL": 35,
    "name": "ტემპერატურის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-157",
    "image": "images/actual-157.webp",
    "verified": true,
    "category": "parts",
    "brand": "eca"
  },
  {
    "partType": "ntc",
    "brands": [
      "baymak"
    ],
    "priceGEL": 40,
    "name": "ტემპერატურის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-158",
    "image": "images/actual-158.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  },
  {
    "partType": "ntc",
    "brands": [
      "bosch"
    ],
    "priceGEL": 35,
    "name": "ტემპერატურის სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-159",
    "image": "images/actual-159.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "ntc",
    "brands": [
      "beretta"
    ],
    "priceGEL": 60,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-160",
    "image": "images/actual-160.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "ntc",
    "brands": [
      "ariston",
      "biasi"
    ],
    "priceGEL": 20,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-161",
    "image": "images/actual-161.webp",
    "verified": true,
    "category": "parts",
    "brand": "ariston"
  },
  {
    "partType": "ntc",
    "brands": [
      "alarko",
      "baxi",
      "baymak",
      "demirdokum"
    ],
    "priceGEL": 25,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-162",
    "image": "images/actual-162.webp",
    "verified": true,
    "category": "parts",
    "brand": "alarko"
  },
  {
    "partType": "ntc",
    "brands": [
      "airfel",
      "ariston",
      "baxi",
      "baymak",
      "chaffoteaux"
    ],
    "priceGEL": 25,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-163",
    "image": "images/actual-163.webp",
    "verified": true,
    "category": "parts",
    "brand": "airfel"
  },
  {
    "partType": "ntc",
    "brands": [
      "beretta"
    ],
    "priceGEL": 20,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-164",
    "image": "images/actual-164.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "ntc",
    "brands": [
      "bosch"
    ],
    "priceGEL": 25,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-165",
    "image": "images/actual-165.webp",
    "verified": true,
    "category": "parts",
    "brand": "bosch"
  },
  {
    "partType": "ntc",
    "brands": [
      "demirdokum",
      "protherm",
      "vaillant"
    ],
    "priceGEL": 25,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-166",
    "image": "images/actual-166.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "ntc",
    "brands": [
      "eca",
      "protherm"
    ],
    "priceGEL": 25,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-167",
    "image": "images/actual-167.webp",
    "verified": true,
    "category": "parts",
    "brand": "eca"
  },
  {
    "partType": "ntc",
    "brands": [
      "beretta"
    ],
    "priceGEL": 45,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-168",
    "image": "images/actual-168.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "ntc",
    "brands": [
      "beretta"
    ],
    "priceGEL": 60,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-169",
    "image": "images/actual-169.webp",
    "verified": true,
    "category": "parts",
    "brand": "beretta"
  },
  {
    "partType": "ntc",
    "brands": [
      "protherm"
    ],
    "priceGEL": 20,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-170",
    "image": "images/actual-170.webp",
    "verified": true,
    "category": "parts",
    "brand": "protherm"
  },
  {
    "partType": "ntc",
    "brands": [
      "ferroli"
    ],
    "priceGEL": 35,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-171",
    "image": "images/actual-171.webp",
    "verified": true,
    "category": "parts",
    "brand": "ferroli"
  },
  {
    "partType": "ntc",
    "brands": [
      "demirdokum",
      "demrad",
      "protherm",
      "vaillant"
    ],
    "priceGEL": 25,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-172",
    "image": "images/actual-172.webp",
    "verified": true,
    "category": "parts",
    "brand": "demirdokum"
  },
  {
    "partType": "ntc",
    "brands": [
      "alarko",
      "biasi"
    ],
    "priceGEL": 25,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-173",
    "image": "images/actual-173.webp",
    "verified": true,
    "category": "parts",
    "brand": "alarko"
  },
  {
    "partType": "ntc",
    "brands": [
      "baymak",
      "baxi"
    ],
    "priceGEL": 35,
    "name": "NTC სენსორი",
    "description": "თავსებადობა დაზუსტდება ქვაბის მოდელის მიხედვით.",
    "id": "actual-174",
    "image": "images/actual-174.webp",
    "verified": true,
    "category": "parts",
    "brand": "baymak"
  }
]);
