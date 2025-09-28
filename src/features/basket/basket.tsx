import { useAppDispatch, useAppSelector } from '../../app/hooks';
import products from '../../data/products.json';
import { add, selectBasket } from './basketSlice';


export const getProduct = (id: number) => {
  return products.find(product => product.id === id);
};

const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(selectBasket);

  return (
    <div>
      <h2>Mon panier</h2>
      <ul>
        {basket.items.map(item => {
          const product = getProduct(item.id);
          if (!product) return null;

          return (
            <li key={item.id}>
              {product.name} - {product.price.toFixed(2)}€
              <button onClick={() => dispatch(add({ id: item.id, quantity: 1 }))}>
                +
              </button>
              {item.quantity}
              <button onClick={() => dispatch(add({ id: item.id, quantity: -1 }))}>
                -
              </button>
              {(item.quantity * product.price).toFixed(2)}€
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Basket;