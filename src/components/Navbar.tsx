import { Navbar as BaseNavbar, type NavbarProps as BaseProps } from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface NavbarProps extends BaseProps {
}

const Navbar: BsPrefixRefForwardingComponent<"nav", NavbarProps> = (props) => {
  return <BaseNavbar {...props} />;
};

export default Navbar;