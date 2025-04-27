import CheckedIcon from '@/components/icons/checked-icon';
import { useAppStore } from '@/store';

interface ColorProps {
  color: string;
  isSelect?: boolean;
  isOFS?: boolean;
}

const Color = ({ color, isSelect = false, isOFS = false }: ColorProps) => {
  const { setSelected } = useAppStore(state => state.product);

  return (
    <div
      onClick={() => setSelected({ color })}
      style={{ background: color }}
      className={`relative cursor-pointer w-[38px] h-[38px] rounded-full  flex items-center justify-center ${isSelect ? 'border-indigo-700 border-1' : `hover:border hover:border-[2.33px] hover:border-[#C7D2FE]`}`}
    >
      {isSelect && (
        <div
          className={`w-8 h-8 rounded-full relative`}
          style={{ background: color }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CheckedIcon />
          </div>
        </div>
      )}

      {isOFS && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-[2px] bg-neutral-600 rotate-135"></div>
      )}
    </div>
  );
};

export default Color;
