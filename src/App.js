import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import OrderForm from './pages/OrderForm'
import ProductsByBrand from './pages/ProductsByBrand';
import About from './pages/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/ProductsByBrand' element={<ProductsByBrand/>}/>
        <Route path='/ProductDetail' element={<ProductDetail/>}/>
        <Route path='/OrderForm' element={<OrderForm/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
