import './App.css'
import Products from './features/products/products'
import BasketCanvas from "./features/cart/cartDetails"
import { Container, Row, Col, Navbar, NavbarText, NavbarBrand } from './components'
import Basket from './features/cart/cart'

function App() {
  return (
    <Container>
      <Navbar>
        <NavbarBrand href="#">Ecole Marie Marvingt</NavbarBrand>
        <NavbarText><Basket /></NavbarText>
      </Navbar>
      <Row>
        <Col>
          <Products />
        </Col>  
      </Row>
      <BasketCanvas />
      <Basket />
    </Container>
  )
}

export default App
