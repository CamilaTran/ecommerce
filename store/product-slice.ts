import { StateCreator } from 'zustand';
import { StoreState } from '.';

export interface Product {
  product_id: string;
  size: string;
  quantity: number;
  color: string;
}

export type ProductSlice = {
  selected: Product;
  setSelected: (info: Partial<Product>) => void;
};

const createProductSlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  ProductSlice
> = set => ({
  selected: {
    product_id: '',
    size: '',
    quantity: 1,
    color: '',
  },
  setSelected: info =>
    set(state => ({
      product: {
        ...state.product,
        selected: {
          ...state.product.selected,
          ...info,
        },
      },
    })),
});

export { createProductSlice };
