import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const SIZES = [
  {
    value: 'xs',
    label: 'XS',
  },
  {
    value: 'sm',
    label: 'S',
  },
  {
    value: 'md',
    label: 'M',
  },
  {
    value: 'lg',
    label: 'L',
  },
  {
    value: 'xl',
    label: 'XL',
  },
];

const Size = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-500 text-sm">Available Colors</p>

      <ToggleGroup type="single" className="flex gap-4">
        {SIZES.map(i => (
          <ToggleGroupItem
            value={i.value}
            key={i.value}
            className="border-1 border-neutral-200 w-16 h-12 font-medium text-base rounded uppercase"
          >
            {i.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default Size;
