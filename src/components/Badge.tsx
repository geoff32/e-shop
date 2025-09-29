import { Badge as BaseBadge, type BadgeProps as BaseProps} from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface BadgeProps extends BaseProps {
}

export const Badge : BsPrefixRefForwardingComponent<'div', BadgeProps> = (props) => {
  return <BaseBadge {...props} />;
};

export default Badge;