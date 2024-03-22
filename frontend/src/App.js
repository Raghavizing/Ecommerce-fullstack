import './App.css';
import Navbar from './Components/Navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Components/Pages/Shop/Shop.jsx';
import ShopCategory from './Components/Pages/ShopCategory/ShopCategory.jsx';
import Login from "./Components/Pages/Login/Login.jsx";
import Product from "./Components/Pages/Product/Product.jsx";
import SignUp from "./Components/Pages/SignUp/SignUp.jsx";
import Cart from "./Components/Pages/Cart/Cart.jsx";
import Footer from './Components/Footer/Footer.jsx';
import MensBanner from "./Components/Assets/banner_mens.png"
import WomensBanner from "./Components/Assets/banner_women.png"
import KidsBanner from "./Components/Assets/banner_kids.png"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={MensBanner} category='Men' />} />
          <Route path="/womens" element={<ShopCategory banner={WomensBanner} category='Women' />} />
          <Route path="/kids" element={<ShopCategory banner={KidsBanner} category='Kid' />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productID" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
