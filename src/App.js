import './App.css';
import Home from './Screens/Home';
import Product from './Screens/Product';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
        
       
        <Routes >
     
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/product" element={<Product/>}/>
        
        </Routes >

        </Router>
    </div>
  );
}

export default App;
