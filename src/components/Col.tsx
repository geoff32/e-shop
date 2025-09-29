import { Col as BaseCol, type ColProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface ColProps extends BaseProps {
}

export const Col : BsPrefixRefForwardingComponent<'div', ColProps> = (props) => {
  return <BaseCol {...props} />;
};

export default Col;