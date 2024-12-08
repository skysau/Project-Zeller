import { products } from "./product.Data";
import { ProductDesc } from "./product.interface";


      
 export const getProductBySku = (sku: string): ProductDesc | undefined => products.find((product) => product.sku === sku);

  

  