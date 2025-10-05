import { Container, Row, Col, Button } from '../../components';
import './OrderPipeline.scss';
import './OrderConfirmation.scss';
import { useAppSelector } from '../../app/hooks';
import { Link, useLocation } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../cart/cartSlice';
import { QRCodeSVG } from 'qrcode.react';
import { useRef } from 'react';
import { appRoutes } from '../../App';
import { PDFDownloadLink } from '@react-pdf/renderer';
import OrderPDF from './OrderPDF';

interface OrderConfirmationState {
  lastName: string;
  firstName: string;
  email: string;
  children: Array<{
    lastName: string;
    firstName: string;
    class: string;
  }>;
}

const OrderConfirmation = () => {
  const location = useLocation();
  const formData = location.state as OrderConfirmationState;
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const qrRef = useRef<SVGSVGElement>(null);

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ marginBottom: '20px' }}>
            <Link to={appRoutes.catalog}>
              <Button>Retour au catalogue</Button>
            </Link>
          </div>
          <h2>Bon de commande</h2>
          <div className="order-confirmation">
            <h3>Récapitulatif de la commande</h3>
            <div className="order-summary">
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
            <h3>Informations personnelles</h3>
            <div className="personal-info">
              <p><strong>Nom :</strong> {formData.lastName}</p>
              <p><strong>Prénom :</strong> {formData.firstName}</p>
              <p><strong>Email :</strong> {formData.email}</p>
              <h4>Enfants :</h4>
              {formData.children.map((child, index) => (
                <div key={index} className="child-info">
                  <h5>Enfant {index + 1}</h5>
                  <p><strong>Nom :</strong> {child.lastName}</p>
                  <p><strong>Prénom :</strong> {child.firstName}</p>
                  <p><strong>Classe :</strong> {child.class}</p>
                </div>
              ))}
            </div>
            <div className="order-qrcode">
              <h3>Code QR de la commande</h3>
              <QRCodeSVG
                ref={qrRef}
                value={JSON.stringify({
                  customer: {
                    lastName: formData.lastName,
                    firstName: formData.firstName,
                    email: formData.email,
                    children: formData.children
                  },
                  items: cartItems,
                  total: total,
                  date: new Date().toISOString()
                })}
                level="M"
                marginSize={4}
                size={256}
              />
              <div className="download-button">
                <PDFDownloadLink
                  document={
                    <OrderPDF
                      customer={{
                        lastName: formData.lastName,
                        firstName: formData.firstName,
                        email: formData.email,
                        children: formData.children
                      }}
                      items={cartItems}
                      total={total}
                    />
                  }
                  fileName={`commande-${formData.lastName}-${formData.firstName}-${new Date().toISOString().split('T')[0]}.pdf`}
                >
                  {({ loading }) => (
                    <Button disabled={loading}>
                      {loading ? 'Génération en cours...' : 'Télécharger le bon de commande'}
                    </Button>
                  )}
                </PDFDownloadLink>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;