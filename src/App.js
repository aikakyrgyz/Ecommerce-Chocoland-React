import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/ProductDetail' element={<ProductDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
