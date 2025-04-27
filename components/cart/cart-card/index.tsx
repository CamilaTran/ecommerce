import QuantityControl from '@/components/shared/quantity-control';
import { useAppStore } from '@/store';
import { CartItem } from '@/types/cart.types';
import Image from 'next/image';

interface CardCardProps {
  info: CartItem;
}

const CartCard = ({ info }: CardCardProps) => {
  const { addItem, subItem, removeItem } = useAppStore(state => state.cart);

  return (
    <div className="flex md:flex-row flex-col md:gap-8 gap-4 border-b-1 border-dashed border-neutral-300 py-8">
      <div className="md:w-70 h-50 w-full relative rounded-lg">
        <Image
          fill
          alt=""
          objectFit="cover"
          className="rounded-lg"
          src={info.images?.[0]?.image_url ?? ''}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-medium text-2xl">{info.name}</h3>
        <div className="text-neutral-600 text-base">
          {[info.color, info.size]
            .filter(i => i)
            .map((i, index) => (
              <span key={index} className="text-gray-600">
                {i}
                {index !==
                  [info.color, info.size].filter(i => i).length - 1 && (
                  <span className="mx-1">•</span>
                )}
              </span>
            ))}
        </div>
        <p className="text-sm text-neutral-600">{info.description}</p>
        <div className="flex justify-between items-center">
          <QuantityControl
            num={info.quantity}
            isTriggerRemove={true}
            onIncreament={() => addItem({ ...info, quantity: 1 })}
            onDecreament={() => subItem(info.product_id)}
            onRemove={() => removeItem(info.product_id)}
          />
          <div className="flex items-center gap-2">
            <span className="text-lg">${info.priceRange.lowest}</span>
            {info.priceRange.highest > info.priceRange.lowest && (
              <span className="text-xs text-neutral-600 line-through">
                ${info.priceRange.highest}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
