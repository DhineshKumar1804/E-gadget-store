import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Account from './components/account.js';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import AdminAddProduct from './components/AdminAddProduct.js';
import ProductList from './components/ProductList.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <br />
        <h1 className="head"><b>E-Gadgets Pro</b></h1>
        <br />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            
            <li><Link to="/contact">Contact</Link></li>
            
            
            <li> <Link to="/Login">Login</Link></li>
            
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<Account />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/admin" element={<AdminAddProduct />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;

