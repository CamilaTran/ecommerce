import { StateCreator } from 'zustand';
import { StoreState } from '.';
import { CartItem } from '@/types/cart.types';

export type CartSlice = {
  list: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  subItem: (id: string) => void;
  removeItem: (id: string) => void;
};
const createCartSlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  CartSlice
> = set => ({
  list: [] as CartItem[],
  totalPrice: 0,

  addItem: product => {
    set(state => {
      const exists = state.cart.list.some(
        i => i.product_id === product.product_id
      );

      let newList;
      if (!exists) {
        newList = [...state.cart.list, product];
      } else {
        newList = state.cart.list.map(item =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      const newTotalPrice = newList.reduce(
        (total, item) => total + item.priceRange.lowest * item.quantity,
        0
      );

      return {
        cart: {
          ...state.cart,
          list: newList,
          totalPrice: newTotalPrice,
        },
      };
    });
  },

  subItem: id => {
    set(state => {
      const newList = state.cart.list.map(item => {
        if (item.product_id === id) {
          // Decrease quantity by 1, but don't go below 1
          const newQuantity = Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      const newTotalPrice = newList.reduce(
        (total, item) => total + item.priceRange.lowest * item.quantity,
        0
      );

      return {
        cart: {
          ...state.cart,
          list: newList,
          totalPrice: newTotalPrice,
        },
      };
    });
  },

  removeItem: id => {
    set(state => {
      const newList = state.cart.list.filter(item => item.product_id !== id);

      const newTotalPrice = newList.reduce(
        (total, item) => total + item.priceRange.lowest * item.quantity,
        0
      );

      return {
        cart: {
          ...state.cart,
          list: newList,
          totalPrice: newTotalPrice,
        },
      };
    });
  },
});

export { createCartSlice };
