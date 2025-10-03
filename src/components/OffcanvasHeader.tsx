import { OffcanvasHeader as BaseOffcanvasHeader, type OffcanvasHeaderProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface OffcanvasHeaderProps extends BaseProps {
}

export const OffcanvasHeader : BsPrefixRefForwardingComponent<'div', OffcanvasHeaderProps> = (props) => {
  return <BaseOffcanvasHeader {...props} />;
};

export default OffcanvasHeader;