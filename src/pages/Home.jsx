import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import Product from "../components/Product";

const Home = () => {
  const [showProductBar, setShowProductBar] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios(
        "https://661ba1e565444945d04fede1.mockapi.io/data_market/e-commerce"
      );
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(setProducts);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Checkout Page</h1>

        <button
          className="btn btn-warning"
          onClick={() => setShowProductBar(!showProductBar)}
        >
          {showProductBar ? "Hide Product Bar" : "Show Product Bar"}
        </button>
      </div>
      <div className="bigContainer">
        {showProductBar && <ProductDetails getProducts={getProducts} />}
        <Product
          products={products}
          setProducts={setProducts}
          getProducts={getProducts}
        />
      </div>
    </>
  );
};

export default Home;
