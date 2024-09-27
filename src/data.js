import image1 from "./images/eshops.svg"
import image2 from "./images/android.svg"
import image3 from "./images/webs.svg"

const service = [
  {
    id: 1,
    name: "E-shopy",
    image: image1,
    service1: "Magento 2 e-shop",
    service2: "Prestashop e-shop",
    route1: "/magento-2-e-shop",  
    route2: "/prestashop-e-shop"  
  },
  {
    id: 2,
    name: "Programovanie",
    image: image2,
    service1: "Webové aplikácie",
    service2: "Android aplikácie",
    route1: "/vyvoj-webovych-aplikacii",
    route2: "/vyvoj-mobilnych-aplikacii"
  },
  {
    id: 3,
    name: "Weby",
    image: image3,
    service1: "Firemné webové stránky",
    route1: "/tvorba-webstranok-na-mieru"
  }
];

export default service;
