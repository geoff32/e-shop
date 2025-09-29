import { CardText as BaseCardText, type CardTextProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface CardTextProps extends BaseProps {
}

export const CardText : BsPrefixRefForwardingComponent<'div', CardTextProps> = (props) => {
  return <BaseCardText {...props} />;
};

export default CardText;