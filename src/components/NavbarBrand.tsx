import { NavbarBrand as BaseNavbarBrand, type NavbarBrandProps as BaseProps } from 'react-bootstrap';
import type { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

interface NavbarBrandProps extends BaseProps {
}

const NavbarBrand: BsPrefixRefForwardingComponent<"a", NavbarBrandProps> = (props) => {
  return <BaseNavbarBrand {...props} />;
};

export default NavbarBrand;