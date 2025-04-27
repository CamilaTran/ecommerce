import { Product } from './product.types';

export interface CartItem extends Product {
  size: string;
  quantity: number;
  color: string;
}
