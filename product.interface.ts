export interface ProductDesc {
    sku: string;
    name: string;
    price: number;
  }


export interface PricingRule {
    applyRule(items: ProductDesc[]): number;
}
  