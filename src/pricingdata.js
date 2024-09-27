import fixedprice from "./images/fixedprice.svg"
import develop from "./images/develop.svg"
import monthly from "./images/monthly.svg"

const pricingdata =  [
  {
    id: 1,
    image: fixedprice,
    header: "Fixná cena",
    text: "“Krabicové riešenie” akými sú v našom prípade štandardizované weby a internetové obchody začíname spravidla fixnou cenou za kompletný projekt podľa vopred danej špecifikácie. V prípade, ak je potrebné vyvinúť špecifický modul, tak ten je osobitne účtovaný kontinuálnym vývojom."
  },
  {
    id: 2,
    image: develop,
    header: "Kontinuálny vývoj",
    text: "Tento model najčastejšie kombinujeme so zakúpením hotových modulov (licencie) s vývojom podľa detailných špecifikácií agilnou metodikou SCRUM. V tomto modeli výsledky práce dodávame v menších častiach, pravidelne podľa dohodnutých intervalov a dohodnutom rozsahu podľa kapacity tímu."
  },
  {
    id: 3,
    image: monthly,
    header: "Mesačný paušál",
    text: "Projekty a služby, ktoré si vyžadujú pravidelné práce a údržbu naceňujeme na mesačné paušály. Najčastejšie sa jedná o technický support, pravidelnú optimalizáciu (napr. formou A/B testov) a online marketingové služby ako sú správa PPC kampaní či SEO optimalizácia."
  }
]

export default pricingdata