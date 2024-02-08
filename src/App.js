import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import"./app.css"
import Home from "./pages/home/Home";
import React from "react";
import { BrowserRouter as Router, Routes,Route, } from "react-router-dom";
import Listuser from "./pages/Listuser/Listuser";
import User from "./pages/user/User";
import Newpage from "./pages/newPage/Newpage";
import ProductList from "./pages/productlist/Productlist";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/users" element={<Listuser/>}></Route>
            <Route path="/user/:userId" element={<User/>}></Route>
            <Route path="/newUser" element={<Newpage/>}></Route>
            <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={ <Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
