'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SubtractIcon from '@/components/icons/subtract-icon';
import PlusIcon from '@/components/icons/plus-icon';

const MIN_QUANTITY = 1

const Quantity = () => {
  const [count, setCounter] = useState<number>(1);

  const increament = () => {
    setCounter(count + 1);
  };

  const decreament = () => {
    setCounter(count - 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-500 text-sm">Quantity</p>
      <div className="border-1 border-neutral-200 bg-neutral-50 w-fit flex gap-3 items-center rounded-[3px] h-9 py-2 px-[6px]">
        <Button
          onClick={decreament}
          variant="ghost"
          disabled={count === MIN_QUANTITY}
          className="!p-0 w-5"
          size="icon"
        >
          <SubtractIcon color={count === MIN_QUANTITY ? "#A3A3A3" : "#525252"} />
        </Button>
        <p className="text-neutral-600 font-medium text-sm w-[50px] text-center">
          {count}
        </p>
        <Button
          onClick={increament}
          variant="ghost"
          className="!p-0 w-5 h-5"
          size="icon"
        >
          <PlusIcon color={count === 10 ? "#A3A3A3" : "#525252"} />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
