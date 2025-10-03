import { Offcanvas as BaseOffcanvas, type OffcanvasProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface OffcanvasProps extends BaseProps {
}

export const Offcanvas : BsPrefixRefForwardingComponent<'div', OffcanvasProps> = (props) => {
  return <BaseOffcanvas {...props} />;
};

export default Offcanvas;