import CartList from '../cart-list';
import OrderSummary from '../order-summary';

const CartDetail = () => {
  return (
    <div className="flex gap-8 lg:flex-row flex-col">
      <CartList />
      <div className="flex-1 sticky top-0">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartDetail;
