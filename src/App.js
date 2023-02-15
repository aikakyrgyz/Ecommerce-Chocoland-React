import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import OrderForm from './pages/OrderForm'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/ProductDetail' element={<ProductDetail/>}/>
        <Route path='/OrderForm' element={<OrderForm/>}/>


      </Routes>
    </>
  );
}

export default App;
