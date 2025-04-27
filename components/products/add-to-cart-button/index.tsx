'use client';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store';
import { Product } from '@/types/product.types';
import { useRouter } from 'next/navigation';

interface AddToCartButtonProps {
  info: Product;
  isTriggerColor: boolean;
  isTriggerSize: boolean;
}

const AddToCartButton = ({
  isTriggerColor,
  isTriggerSize,
  info,
}: AddToCartButtonProps) => {
  const { product, cart } = useAppStore();
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        cart.addItem({ ...product.selected, ...info });
        router.push('/cart');
      }}
      disabled={
        Boolean(isTriggerColor && !product.selected.color) ||
        Boolean(isTriggerSize && !product.selected.size)
      }
      variant="default"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
