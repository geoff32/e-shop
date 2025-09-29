import { Button as BaseButton, type ButtonProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface ButtonProps extends BaseProps {
}

export const Button : BsPrefixRefForwardingComponent<'div', ButtonProps> = (props) => {
  return <BaseButton {...props} />;
};

export default Button;