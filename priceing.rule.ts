import { PricingRule, ProductDesc } from "./product.interface";

export class ThreeForTwoOffer implements PricingRule {
    private offerItem:String | undefined;
    private offerEligibilityCount = 3; 
    constructor(item: String,offerEligibilityCount:number) {
        this.offerItem = item;
        this.offerEligibilityCount=offerEligibilityCount;
      }


    applyRule(items: ProductDesc[]): number {
      let count = 0;
      let totalPrice = 0;
      for (const item of items) {
        if (item.sku === this.offerItem) {
            count++;
        }
      }
      const eligibleCount = Math.floor(count / this.offerEligibilityCount) * 2 + (count % this.offerEligibilityCount);
      for (let i = 0; i < eligibleCount; i++) {
        totalPrice += items.find((item) => item.sku === this.offerItem)?.price || 0;
      }
      items.filter((item) => item.sku !== this.offerItem).forEach((nonEligibleItem)=>{
        totalPrice += nonEligibleItem.price;
      })
      return totalPrice;
    }
  }
  
  export class BulkDiscountSuperIPad implements PricingRule {
    applyRule(items: ProductDesc[]): number {
      let ipadCount = 0;
      let totalPrice = 0;
      let discountedValue = 499.99; // offer eligibity cutoff Value
      for (const item of items) {
        if (item.sku === "ipd") {
          ipadCount++;
        }
      }
      const pricePerIPad = ipadCount > 4 ? discountedValue : items.find((item) => item.sku === "ipd")?.price || 0;
      for (let i = 0; i < ipadCount; i++) {
        totalPrice += pricePerIPad;
      }
      items.filter((item) => item.sku !== "ipd").forEach((nonEligibleItem)=>{
        totalPrice += nonEligibleItem.price;
      })
      return totalPrice;
    }
  }
  
  