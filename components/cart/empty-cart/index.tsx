import CartIcon from '@/components/icons/cart-icon';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const EmptyCart = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="flex flex-col gap-5 justify-center items-center flex-1 lg:py-0 md:py-26 py-22">
        <Button
          variant="secondary"
          className="rounded-full w-12 h-12 shadow-btn"
        >
          <CartIcon />
        </Button>
        <div className="text-center">
          <h4 className="font-medium text-xl">Your cart is empty</h4>
          <p className="text-base mt-2">Let&apos;s go explore some products</p>
        </div>

        <Button variant="default" size="sm" className="w-fit">
          Explore products
        </Button>
      </div>
      <div className="lg:w-174 lg:h-108  md:w-full md:h-80 h-45 relative">
        <Image src="/images/cart.png" alt="" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default EmptyCart;
