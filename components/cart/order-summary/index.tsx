import CouponIcon from '@/components/icons/coupon-icon';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store';
import Coupon from '../coupon';

const OrderSummary = () => {
  const { totalPrice } = useAppStore(state => state.cart);
  return (
    <div className="border-1 border-neutral-300 md:p-8 p-4 h-fit rounded-lg flex flex-col gap-8">
      <h4 className="text-2xl font-medium">Order Summary</h4>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-semibold text-lg">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-600">Shipping</span>
          <span className="font-semibold text-lg">FREE</span>
        </div>

        <div className="flex justify-between">
          <div className=""></div>
          <div className="flex gap-[6px] items-center">
            <CouponIcon />
            <p className="text-indigo-700 font-medium">Add coupon code</p>
          </div>
        </div>

        <Coupon />
      </div>

      <hr className="border-1 border-dashed border-neutral-300" />

      <div className="flex justify-between">
        <span className="text-2xl">Total</span>
        <span className="font-semibold text-4xl">${totalPrice}</span>
      </div>

      <Button variant="default" size="default" className="w-full">
        Checkout
      </Button>
    </div>
  );
};

export default OrderSummary;
