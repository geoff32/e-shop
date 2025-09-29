import { Row as BaseRow, type RowProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface RowProps extends BaseProps {
}

export const Row : BsPrefixRefForwardingComponent<'div', RowProps> = (props) => {
  return <BaseRow {...props} />;
};

export default Row;