import './App.css';
import Navbar from './Comps/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Footer from './Comps/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/tech' element={<ShopCategory category="tech"/>}/>
          <Route path='/attire' element={<ShopCategory category="attire"/>}/>
          <Route path='/food' element={<ShopCategory category="food"/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
