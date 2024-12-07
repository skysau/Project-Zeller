interface ProductDesc {
    sku: string;
    name: string;
    price: number;
  }


interface PricingRule {
    applyRule(items: ProductDesc[]): number;
}
  