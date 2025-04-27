'use client';
import { Button } from '@/components/ui/button';
import SubtractIcon from '@/components/icons/subtract-icon';
import PlusIcon from '@/components/icons/plus-icon';

const MIN_QUANTITY = 1;

interface QuantityControlProps {
  num?: number;
  isTriggerRemove?: boolean;
  onIncreament: () => void;
  onDecreament: () => void;
  onRemove?: () => void;
}

const QuantityControl = ({
  num = 1,
  isTriggerRemove = false,
  onDecreament,
  onIncreament,
  onRemove,
}: QuantityControlProps) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="border-1 border-neutral-200 bg-neutral-50 w-fit flex gap-3 items-center rounded-[3px] h-9 py-2 px-[6px]">
        <Button
          onClick={onDecreament}
          variant="ghost"
          disabled={num === MIN_QUANTITY}
          className="!p-0 w-5"
          size="icon"
        >
          <SubtractIcon color={num === MIN_QUANTITY ? '#A3A3A3' : '#525252'} />
        </Button>
        <p className="text-neutral-600 font-medium text-sm w-[50px] text-center">
          {num}
        </p>
        <Button
          onClick={onIncreament}
          variant="ghost"
          className="!p-0 w-5 h-5"
          size="icon"
        >
          <PlusIcon color={num === 10 ? '#A3A3A3' : '#525252'} />
        </Button>
      </div>
      {isTriggerRemove && (
        <Button
          variant="ghost"
          className="p-0 h-fit w-fit text-neutral-600 text-sm"
          onClick={onRemove}
        >
          Remove
        </Button>
      )}
    </div>
  );
};

export default QuantityControl;
