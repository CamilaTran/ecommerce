'use client';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useAppStore } from '@/store';
import { Product } from '@/types/product.types';

interface SizeProps {
  sizes: Product['sizes'];
}

const Size = ({ sizes }: SizeProps) => {
  const { setSelected } = useAppStore(state => state.product);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-500 text-sm">Available Sizes</p>

      <ToggleGroup type="single" className="flex gap-4 flex-wrap">
        {sizes.map(i => (
          <ToggleGroupItem
            value={i}
            key={i}
            className="border-1 border-neutral-200 w-16 h-12 font-medium text-base rounded uppercase flex-shrink-0"
            onClick={() => setSelected({ size: i })}
          >
            {i}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default Size;
