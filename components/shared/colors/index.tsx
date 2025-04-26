import Color from '../color';

interface ColorsProps {
  colorList: string[];
}

const Colors = ({ colorList }: ColorsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-500 text-sm">Available Colors</p>
      <div className="flex gap-4">
        {colorList.map((i, index) => (
          <Color key={index} color={i} />
        ))}
      </div>
    </div>
  );
};

export default Colors;
