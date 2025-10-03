import { OffcanvasTitle as BaseOffcanvasTitle, type OffcanvasTitleProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface OffcanvasTitleProps extends BaseProps {
}

export const OffcanvasTitle : BsPrefixRefForwardingComponent<'div', OffcanvasTitleProps> = (props) => {
  return <BaseOffcanvasTitle {...props} />;
};

export default OffcanvasTitle;