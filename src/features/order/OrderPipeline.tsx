import './OrderPipeline.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { appRoutes } from '../../App';
import { Button, Col, Container, FormContainer, FormGroup, Row } from '../../components';
import { useAppSelector } from '../../app/hooks';
import { selectCartItems, selectCartTotal } from '../cart/cartSlice';
import { selectClasses } from '../classes/classesSlice';

const OrderPipeline = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    children: [{
      lastName: '',
      firstName: '',
      class: ''
    }]
  });
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const classes = useAppSelector(selectClasses);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, childIndex?: number) => {
    const { name, value } = e.target;
    
    if (childIndex !== undefined) {
      setFormData(prev => ({
        ...prev,
        children: prev.children.map((child, index) => 
          index === childIndex ? { ...child, [name]: value } : child
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      children: [...prev.children, { lastName: '', firstName: '', class: '' }]
    }));
  };

  const removeChild = (index: number) => {
    if (formData.children.length > 1) {
      setFormData(prev => ({
        ...prev,
        children: prev.children.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(appRoutes.orderConfirmation, { state: formData });
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
          <h2>Récapitulatif de la commande</h2>
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
          <h2>Passer la commande</h2>
          <FormContainer title="Informations personnelles" className="order-form" onSubmit={handleSubmit}>
            <FormGroup
              controlId="lastName"
              label="Nom"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />

            <FormGroup
              controlId="firstName"
              label="Prénom"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />

            <FormGroup
              controlId="email"
              label="Adresse email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <div className="children-section">
              <h3>Enfants</h3>
              {formData.children.map((child, index) => (
                <div key={index} className="child-form">
                  <h4>Enfant {index + 1}</h4>
                  <FormGroup
                    controlId={`child-${index}-lastName`}
                    label="Nom de l'enfant"
                    name="lastName"
                    value={child.lastName}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />

                  <FormGroup
                    controlId={`child-${index}-firstName`}
                    label="Prénom de l'enfant"
                    name="firstName"
                    value={child.firstName}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />

                  <FormGroup
                    controlId={`child-${index}-class`}
                    label="Classe de l'enfant"
                    name="class"
                    value={child.class}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                    as="select"
                    options={classes.map(c => ({ value: c, label: c }))}
                  />

                  {formData.children.length > 1 && (
                    <Button 
                      type="button" 
                      className="btn-danger mb-3"
                      onClick={() => removeChild(index)}
                    >
                      Supprimer cet enfant
                    </Button>
                  )}
                </div>
              ))}
              <Button 
                type="button" 
                className="btn-secondary mb-3"
                onClick={addChild}
              >
                Ajouter un enfant
              </Button>
            </div>

            <div className="form-actions">
              <Button type="submit">Confirmer</Button>
            </div>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPipeline;