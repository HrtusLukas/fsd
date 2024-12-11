import fixedprice from "./images/fixedprice.svg";
import develop from "./images/develop.svg";
import monthly from "./images/monthly.svg";

const pricingdata = [
  {
    id: 1,
    image: fixedprice,
    header: "Fixed Price",
    text: "A “box solution” such as our standardized websites and online stores typically starts with a fixed price for the complete project based on a pre-defined specification. If a specific module needs to be developed, it will be charged separately as continuous development."
  },
  {
    id: 2,
    image: develop,
    header: "Continuous Development",
    text: "This model is most commonly combined with the purchase of ready-made modules (licenses) and development based on detailed specifications using the Agile SCRUM methodology. In this model, we deliver work results in smaller parts, regularly according to agreed intervals and the scope defined by the team's capacity."
  },
  {
    id: 3,
    image: monthly,
    header: "Monthly Subscription",
    text: "Projects and services that require regular work and maintenance are priced on a monthly subscription basis. This often includes technical support, regular optimization (e.g., through A/B testing), and online marketing services such as PPC campaign management or SEO optimization."
  }
];

export default pricingdata;
