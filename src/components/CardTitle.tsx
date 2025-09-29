import { CardTitle as BaseCardTitle, type CardTitleProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface CardTitleProps extends BaseProps {
}

export const CardTitle : BsPrefixRefForwardingComponent<'div', CardTitleProps> = (props) => {
  return <BaseCardTitle {...props} />;
};

export default CardTitle;