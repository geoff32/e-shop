import { Container, Row, Col } from '../../components';
import './OrderPipeline.scss';
import { useAppSelector } from '../../app/hooks';
import { selectCartItems, selectCartTotal } from '../cart/cartSlice';

const OrderPipeline = () => {
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Passer la commande</h2>
          <div className="order-summary">
            <h3>Récapitulatif de la commande</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <span>{item.name}</span>
                <span>Quantité: {item.quantity}</span>
                <span>{item.price * item.quantity}€</span>
              </div>
            ))}
            <div className="order-total">
              <strong>Total: {total}€</strong>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPipeline;