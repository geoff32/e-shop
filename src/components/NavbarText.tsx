import { NavbarText as BaseNavbarText, type NavbarTextProps as BaseProps } from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface NavbarTextProps extends BaseProps {
}

const NavbarText: BsPrefixRefForwardingComponent<"span", NavbarTextProps> = (props) => {
  return <BaseNavbarText {...props} />;
};

export default NavbarText;