import { getProductBySku } from "./product.details";
import { PricingRule, ProductDesc } from "./product.interface";

export class CheckoutCatalog {
    private items: ProductDesc[] = [];
    private pricingRules: PricingRule[];
  
    constructor(pricingRules: PricingRule[]) {
      this.pricingRules = pricingRules;
    }
  
    scan(sku: string): void {
      const product = getProductBySku(sku);
      if (!product) {
        throw new Error(`Product with SKU '${sku}' not found`);
      }
      this.items.push(product);
    }
  
    total(): number {
        let total=0;
    
        for (const rule of this.pricingRules) {
            const discountedPrice = rule.applyRule(this.items);
            if (discountedPrice > 0) {
                total= total>0?Math.min(total,discountedPrice):discountedPrice;
            }
        }
        return total;
      }
      
  }
  