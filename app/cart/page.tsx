'use client';
import CartDetail from '@/components/cart/cart-detail';
import EmptyCart from '@/components/cart/empty-cart';
import { useAppStore } from '@/store';

export default function Page() {
  const { list: cartList } = useAppStore(state => state.cart);

  return (
    <div className="py-16 lg:max-w-[76rem] mx-auto lg:px-0 px-4">
      <h3 className="font-semibold md:text-5xl text-3xl">Shopping Cart</h3>
      <div className="mt-16">
        {cartList.length ? <CartDetail /> : <EmptyCart />}
      </div>
    </div>
  );
}
