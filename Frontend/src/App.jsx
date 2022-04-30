import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList"
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { useState } from 'react';


const App = () => {
  <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
          </Route>
          <Route path="/Login">
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Routes>
      </Router>
    </div>


  // return <Home />;
  // return <Register />;
  // return <Login />
  // return <ProductList />
  // return <Product />
  // return <Cart />
  
};

export default App;