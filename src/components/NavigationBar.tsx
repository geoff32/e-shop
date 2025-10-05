import { useLocation } from 'react-router-dom';
import { Navbar, NavbarText, NavbarBrand, NavbarCollapse } from '.';
import Cart from '../features/cart/cart';
import { appRoutes } from '../App';

const NavigationBar = () => {
    const location = useLocation();
    const showCart = location.pathname !== appRoutes.order;

    return (
        <Navbar className="app-navbar">
            <NavbarBrand href={appRoutes.catalog}>Ecole Marie Marvingt</NavbarBrand>
            <NavbarCollapse className="basket-icon">
                <NavbarText>
                    {showCart && <Cart />}
                </NavbarText>
            </NavbarCollapse>
        </Navbar>
    );
};

export default NavigationBar;