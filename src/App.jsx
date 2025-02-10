import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { productsData } from "./data.js";
import Home from "./pages/Home/index.jsx";
import ProductsPage from "./pages/Products/index.jsx";
import ProductViewPage from "./pages/ProductView/ProductViewPage.jsx";
import ProductEditPage from "./pages/ProductEdit/ProductEditPage.jsx";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState(productsData);

  console.log({ products });

  return (
    <div className="App">
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Apple Shop</h1>
          <p>Mission, Vission & Values</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="navbar-header">
          <nav>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route
          path="products/:id"
          element={<ProductViewPage products={products} />}
        />
        <Route
          path="products/:id/edit"
          element={<ProductEditPage products={products} />}
        />
      </Routes>
    </div>
  );
}
