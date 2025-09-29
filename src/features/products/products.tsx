import React from "react";
import products from '../../data/products.json';
import { useAppDispatch } from "../../app/hooks";
import { add } from "../basket/basketSlice";
import { Card, CardBody, CardTitle, CardFooter, Badge, Container, Button, CardText } from "../../components";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Catalogue</h2>
      <Container className="d-inline-flex flex-wrap gap-3 justify-content-center">
        {products.map(product => (
          <Card key={product.id}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '150px', marginBottom: '10px' }} />
            <CardBody>
              <CardTitle>{product.name} <Badge>{product.price.toFixed(2)}€</Badge></CardTitle>
              <CardText>{product.description}</CardText>
            </CardBody>
            <CardFooter>
              <Button onClick={() => dispatch(add({ id: product.id, quantity: 1 }))}>
                Ajouter au panier
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Products;