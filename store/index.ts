import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createProductSlice, ProductSlice } from './product-slice';
import { CartSlice, createCartSlice } from './cart-slice';

export type StoreState = {
  product: ProductSlice;
  cart: CartSlice;
};

const useAppStore = create<StoreState>()(
  devtools((...args) => ({
    product: createProductSlice(...args),
    cart: createCartSlice(...args),
  }))
);

export { useAppStore };
