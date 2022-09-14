import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/Product-details";
import HeaderNavbar from "../components/header-navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
function App() {
  return (
    <Router>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/home/category/:name" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
