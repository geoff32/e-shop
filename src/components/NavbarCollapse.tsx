import { NavbarCollapse as BaseNavbarCollapse, type NavbarCollapseProps as BaseProps } from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface NavbarCollapseProps extends BaseProps {
}

const NavbarCollapse: BsPrefixRefForwardingComponent<"a", NavbarCollapseProps> = (props) => {
  return <BaseNavbarCollapse {...props} />;
};

export default NavbarCollapse;