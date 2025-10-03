import './App.scss'
import Products from './features/products/products'
import { Container, Row, Col, Navbar, NavbarText, NavbarBrand, NavbarCollapse } from './components'
import Cart from './features/cart/cart'

function App() {
  return (
    <Container>
      <Navbar className="app-navbar">
        <NavbarBrand href="#">Ecole Marie Marvingt</NavbarBrand>
        <NavbarCollapse className="basket-icon">
          <NavbarText>
            <Cart />
          </NavbarText>
        </NavbarCollapse>
      </Navbar>
      <Row>
        <Col>
          <Products />
        </Col>  
      </Row>
    </Container>
  )
}

export default App
