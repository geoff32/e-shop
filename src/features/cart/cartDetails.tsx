import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, decrementQuantity, removeFromCart, selectCart } from './cartSlice';
import { Container, Button } from '../../components';
import { Link } from 'react-router-dom';
import './CartDetails.scss';
import { appRoutes } from '../../App';

const CartDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectCart);

  const handleIncrement = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      dispatch(addToCart(item));
    }
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="cart-details">
      {items.length === 0 ? (
        <div className="cart-details__empty">Votre panier est vide</div>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-details__item">
              <div className="cart-details__item-info">
                <img src={item.image} alt={item.name} className="cart-details__item-image" />
                <div>
                  <div className="cart-details__item-name">{item.name}</div>
                  <div className="cart-details__item-price">{item.price}€</div>
                </div>
              </div>
              <div className="cart-details__item-controls">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="btn btn-sm btn-outline-secondary cart-details__item-button--decrement"
                >
                  -
                </button>
                <span className="cart-details__item-quantity">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="btn btn-sm btn-outline-secondary cart-details__item-button--increment"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
          <div className="cart-details__total">
            <div>Total:</div>
            <div>{total}€</div>
          </div>
          <div className="cart-details__actions">
            <Link to={appRoutes.order} className="w-100">
              <Button className="w-100">Commander</Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartDetails;