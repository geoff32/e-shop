import { Card as BaseCard, type CardProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface CardProps extends BaseProps {
}

export const Card : BsPrefixRefForwardingComponent<'div', CardProps> = (props) => {
  return <BaseCard {...props} />;
};

export default Card;