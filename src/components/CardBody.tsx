import { CardBody as BaseCardBody, type CardBodyProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface CardBodyProps extends BaseProps {
}

export const CardBody : BsPrefixRefForwardingComponent<'div', CardBodyProps> = (props) => {
  return <BaseCardBody {...props} />;
};

export default CardBody;