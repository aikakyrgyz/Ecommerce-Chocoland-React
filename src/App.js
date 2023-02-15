import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
<<<<<<< HEAD
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import OrderForm from './pages/OrderForm'
=======
import About from './pages/About';
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
>>>>>>> 1817495bdc8c0923f8d7af975e8403d75460d72f

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
        <Route path='/Products' element={<Products/>}/>
        <Route path='/ProductDetail' element={<ProductDetail/>}/>
        <Route path='/OrderForm' element={<OrderForm/>}/>


=======
        <Route path='/About' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/ProductDetail' element={<ProductDetail/>}/>
>>>>>>> 1817495bdc8c0923f8d7af975e8403d75460d72f
      </Routes>
    </>
  );
}

export default App;
