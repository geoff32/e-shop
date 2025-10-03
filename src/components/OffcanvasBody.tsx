import { OffcanvasBody as BaseOffcanvasBody, type OffcanvasBodyProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface OffcanvasBodyProps extends BaseProps {
}

export const OffcanvasBody : BsPrefixRefForwardingComponent<'div', OffcanvasBodyProps> = (props) => {
  return <BaseOffcanvasBody {...props} />;
};

export default OffcanvasBody;