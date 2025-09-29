import { CardFooter as BaseCardFooter, type CardFooterProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface CardFooterProps extends BaseProps {
}

export const CardFooter : BsPrefixRefForwardingComponent<'div', CardFooterProps> = (props) => {
  return <BaseCardFooter {...props} />;
};

export default CardFooter;