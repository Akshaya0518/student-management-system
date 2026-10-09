
import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}

        <div className="controls">
          <div className="form-group">
            <label htmlFor="color">Product colour</label>

            <select
              id="color"
              value={selectedColor}
              onChange={(event) =>
                setSelectedColor(event.target.value)
              }
            >
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="city">Delivery city</label>

            <input
              id="city"
              type="text"
              value={deliveryCity}
              onChange={(event) =>
                setDeliveryCity(event.target.value)
              }
              placeholder="Enter delivery city"
            />
          </div>
        </div>

        <div className="buttons">
          <button
            className="add-button"
            onClick={() => setQuantity(quantity + 1)}
          >
            Add to Cart
          </button>

          <button
            onClick={() =>
              setQuantity(Math.max(0, quantity - 1))
            }
            disabled={quantity === 0}
          >
            Remove One
          </button>

          <button onClick={() => setQuantity(0)}>
            Reset Cart
          </button>

          <button onClick={() => setShowProduct(!showProduct)}>
            {showProduct ? "Hide Product" : "Show Product"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
