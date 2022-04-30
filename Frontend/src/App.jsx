import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList"
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Product" element={<Product />}></Route>
          <Route exact path="/ProductList" element={<ProductList />}></Route>
          <Route exact path="/Cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  )
};


export default App;