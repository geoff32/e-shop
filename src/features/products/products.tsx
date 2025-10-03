import React from "react";
import products from '../../data/products.json';
import { useAppDispatch } from "../../app/hooks";
import { add } from "../basket/basketSlice";
import { Card, CardBody, CardTitle, CardFooter, Badge, Button, CardText, CardImg, CardDeck } from "../../components";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Catalogue</h2>
      <CardDeck>
        {products.map(product => (
          <Card key={product.id}>
            <CardBody>
              <CardImg src={product.image} alt={product.name}></CardImg>
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
      </CardDeck>
    </div>
  );
};

export default Products;