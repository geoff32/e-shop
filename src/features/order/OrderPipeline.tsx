import { Container, Row, Col } from '../../components';
import { Button } from '../../components';
import './OrderPipeline.scss';
import { useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../cart/cartSlice';
import { QRCodeSVG } from 'qrcode.react';
import { useRef } from 'react';
import { appRoutes } from '../../App';

const OrderPipeline = () => {
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const qrRef = useRef<SVGSVGElement>(null);

  const downloadQRCode = () => {
    if (!qrRef.current) return;
    
    const canvas = document.createElement("canvas");
    const svg = qrRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    
    const img = new Image();
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `commande-${new Date().toISOString().split('T')[0]}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
    };
    
    img.src = url;
  };

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ marginBottom: '20px' }}>
            <Link to={appRoutes.catalog}>
              <Button>Retour au catalogue</Button>
            </Link>
          </div>
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
            <div className="order-qrcode">
              <h3>Code QR de la commande</h3>
              <QRCodeSVG
                ref={qrRef}
                value={JSON.stringify({
                  items: cartItems,
                  total: total,
                  date: new Date().toISOString()
                })}
                level="M"
                marginSize={4}
                size={256}
              />
              <div className="download-button">
                <Button onClick={downloadQRCode}>
                  Télécharger le QR Code
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPipeline;