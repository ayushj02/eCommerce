import './App.css';
import Header from './components/Header/Header';
import Home from './modules/Home';
import {Routes, Route} from 'react-router-dom';
import Product from './modules/Product';
import Cart from './modules/Cart';
import Checkout from './modules/Checkout';
import AllProducts from './modules/AllProducts';
import Contact from './modules/Contact';
import About from './modules/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
