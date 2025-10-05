import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './features/products/products'
import { Container, NavigationBar } from './components'
import OrderPipeline from './features/order/OrderPipeline'
import OrderConfirmation from './features/order/OrderConfirmation'
// import config from '../vite.config'

const root = "/e-shop"; //config.base ? `/${config.base}` : '/';

export const appRoutes = {
  catalog: `${root}/`,
  order: `${root}/order`,
  orderConfirmation: `${root}/order/confirmation`
};

function App() {
  return (
    <Router>
      <Container>
        <NavigationBar />
        <Routes>
          <Route path={appRoutes.catalog} element={<Products />} />
          <Route path={appRoutes.order} element={<OrderPipeline />} />
          <Route path={appRoutes.orderConfirmation} element={<OrderConfirmation />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
