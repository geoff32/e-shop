import React from "react";
import products from '../../data/products.json';
import { useAppDispatch } from "../../app/hooks";
import { add } from "../basket/basketSlice";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Catalogue</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price.toFixed(2)}€
            <button onClick={() => dispatch(add({ id: product.id, quantity: 1 }))}>
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;