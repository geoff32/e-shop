import React from "react";
import { Container, type ContainerProps } from "react-bootstrap";

import './CardDeck.scss';

interface CardDekProps extends ContainerProps {
}

const CardDeck: React.FC<CardDekProps> = (props) => {
  return <Container {...props} className={`card-deck ${props.className || ''}`.trim()} />;
};

export default CardDeck;