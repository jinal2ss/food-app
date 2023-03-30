import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Navigation from './Components/Navigation';
import Products from './pages/Products';
import Cart from './pages/Cart';

const App =  () => {
  return (
    <> 
    <Navigation/>  

      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/about" element={<About/>} /> */}
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>

    </>  
  )
}

export default App;   