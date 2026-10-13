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
