import { useAppStore } from '@/store';
import CartCard from '../cart-card';

const CartList = () => {
  const { list } = useAppStore(state => state.cart);

  return (
    <div className="flex flex-col max-w-[800px]">
      {list.map(i => (
        <CartCard key={i.product_id} info={i} />
      ))}
    </div>
  );
};

export default CartList;
