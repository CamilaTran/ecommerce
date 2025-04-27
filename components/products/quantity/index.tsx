'use client';
import QuantityControl from '@/components/shared/quantity-control';
import { useAppStore } from '@/store';

const Quantity = () => {
  const { setSelected, selected } = useAppStore(state => state.product);

  const decrease = () => {
    setSelected({ quantity: selected.quantity - 1 });
  };

  const increase = () => {
    setSelected({ quantity: selected.quantity + 1 });
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-500 text-sm">Quantity</p>
      <QuantityControl
        num={selected.quantity}
        onDecreament={decrease}
        onIncreament={increase}
      />
    </div>
  );
};

export default Quantity;
