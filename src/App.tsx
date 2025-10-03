import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './features/products/products'
import { Container, Navbar, NavbarText, NavbarBrand, NavbarCollapse } from './components'
import Cart from './features/cart/cart'
import OrderPipeline from './features/order/OrderPipeline'
// import config from '../vite.config'

const root = "/e-shop"; //config.base ? `/${config.base}` : '/';

export const appRoutes = {
  home: root,
  order: `${root}/order`
};

function App() {
  return (
    <Router>
      <Container>
        <Navbar className="app-navbar">
          <NavbarBrand href={appRoutes.home}>Ecole Marie Marvingt</NavbarBrand>
          <NavbarCollapse className="basket-icon">
            <NavbarText>
              <Cart />
            </NavbarText>
          </NavbarCollapse>
        </Navbar>
        <Routes>
          <Route path={appRoutes.home} element={<Products />} />
          <Route path={appRoutes.order} element={<OrderPipeline />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
