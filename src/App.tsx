import './App.css'
import Products from './features/products/products'
import Basket from "./features/basket/basket"
import { Container, Row, Col } from './components'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Products />
        </Col>  
      </Row>
      <Basket />
    </Container>
  )
}

export default App
