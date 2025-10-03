import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, decrementQuantity, selectCart } from './cartSlice';

const BasketCanvas: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  return (
    <ul>
      {cart.items.map(item => {
        if (!item) return null;

        return (
          <li key={item.id}>
            {item.name} - {item.price.toFixed(2)}€
            <button onClick={() => dispatch(addToCart(item))}>
              +
            </button>
            {item.quantity}
            <button onClick={() => dispatch(decrementQuantity(item.id))}>
              -
            </button>
            {(item.quantity * item.price).toFixed(2)}€
          </li>
        );
      })}
    </ul>
  );
};

export default BasketCanvas;