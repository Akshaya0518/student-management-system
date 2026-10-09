
import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const totalAmount = quantity * price;

  return (
    <section className="product-card">
      <div className="product-image">
        <span>🖱️</span>
      </div>

      <div className="product-details">
        <h2>{productName}</h2>
        <p className="price">₹{price} per item</p>
        <p>Colour: {selectedColor}</p>
        <p>Deliver to: {deliveryCity}</p>

        <hr />

        <p>Cart Quantity: {quantity}</p>
        <h3>Total Amount: ₹{totalAmount}</h3>

        <p className="status">
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </p>
      </div>
    </section>
  );
}

export default ProductCard;
