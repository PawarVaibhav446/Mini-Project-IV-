import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList"
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { useState } from 'react';


const App = () => {
    return <Home />;
  // return <Register />;
  // return <Login />
  // return <ProductList />
  // return <Product />
  // return <Cart />

};

 {/* <Router>
        <Routes>
          <Route exact path="/" component={Home} >
          </Route>
          <Route path="/Login" component={Login}>
          </Route>
          <Route path="/Register" component={Register}>
          </Route>
        </Routes>
      </Router> */}

export default App;