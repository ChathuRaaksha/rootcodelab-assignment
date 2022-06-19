import './App.css';
import Home from './Screens/Home';
import Products from './Screens/Products';
import Product from './Screens/Pro';
import Navbar from './components/navbar';
import Cart from './Screens/Cart';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
     <Router>
        
       
        <Routes >
     
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/product/:id" element={<Product/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        </Routes >

        </Router>
    </div>
  );
}

export default App;
