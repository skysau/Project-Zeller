import { CheckoutCatalog } from "./catlog.operation";
import { BulkDiscountSuperIPad, ThreeForTwoOffer } from "./priceing.rule";
import { ProductDesc, PricingRule } from "./product.interface";



const pricingRules: PricingRule[] = [];
const priceRule1 = new ThreeForTwoOffer('atv',3)
pricingRules.push(priceRule1);
const priceRule2 = new BulkDiscountSuperIPad()
pricingRules.push(priceRule2);

// Create the checkout system
const checkout = new CheckoutCatalog(pricingRules);

// Example usage
checkout.scan("atv");
checkout.scan("atv");
checkout.scan("atv");
checkout.scan("vga");

console.log("Total: ", checkout.total());

const checkout2 = new CheckoutCatalog(pricingRules);
checkout2.scan("atv");
checkout2.scan("ipd");
checkout2.scan("ipd");
checkout2.scan("atv");
checkout2.scan("ipd");
checkout2.scan("ipd");
checkout2.scan("ipd");

console.log("Total: ", checkout2.total());
