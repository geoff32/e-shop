import { CardHeader as BaseCardHeader, type CardHeaderProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface CardHeaderProps extends BaseProps {
}

export const CardHeader : BsPrefixRefForwardingComponent<'div', CardHeaderProps> = (props) => {
  return <BaseCardHeader {...props} />;
};

export default CardHeader;