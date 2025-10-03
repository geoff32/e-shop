import './App.css'
import Products from './features/products/products'
import BasketCanvas from "./features/basket/basketCanvas"
import { Container, Row, Col, Navbar, NavbarText, NavbarBrand } from './components'
import Basket from './features/basket/basket'

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
