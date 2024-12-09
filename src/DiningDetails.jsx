import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import "./Detail.css";
import Dining1 from "./image/Dining1.jpg";
import Dining2 from "./image/Dining2.jpg";
import Dining3 from "./image/Dining3.jpg";

const diningData = {
  dining1: {
    name: "Marble Dining Table",
    category: "Dining",
    details: `This is a comfortable, upholstered seating piece designed for multiple people. Found in living rooms, it comes in various shapes and sizes, often with armrests and backrests. Sofas are typically made with a sturdy frame, cushioned for comfort, and covered in fabric, leather, or synthetic materials. Some models have added features like reclining seats or convertible designs.`,
    image: Dining1,
  },
  dining2: {
    name: "Classy Dining Table",
    category: "Dining",
    details: ` 
                Design Different design and includes drawer cases
               Materials Melamine faced chipwood
             Color based on customer interest`,
    image: Dining2,
  },
  dining3: {
    name: "Lira Dining Table",
    category: "Dining",
    details: ` The  Furnitures modern elegance with robust functionality, making it a centerpiece for any room. Its sleek design features clean lines and premium materials, ensuring durability and style. Perfect for dining, working, or gathering, it offers ample space without overwhelming your decor. The table is versatile, complementing both minimalist and classic interiors. Easy to maintain, it’s designed for everyday use while maintaining its timeless appeal.`,
    image: Dining3,
  },
};

function DiningDetails() {
  const { productId } = useParams(); // Get productId from URL
  const product = diningData[productId]; // Look up product details

  if (!product) {
    return <p>Product not found!</p>; // Handle invalid productId
  }

  return (
    <div>
      <div className="product">
        <h1>Product Details</h1>
        <p>More about our products: {productId}</p>
      </div>

      <div className="product-section">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card">
          <h1>Product Information</h1>
          <hr />
          <p>
            <b>Category:</b> {product.category}
          </p>
        </div>
      </div>

      <div className="product-detaile">
        <h1>{product.name}</h1>
        <br />
        <p>{product.details}</p>
      </div>

      <Footer />
    </div>
  );
}

export default DiningDetails;
