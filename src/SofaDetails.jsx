
import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import './Detail.css';
import Sofa1 from './image/Sofa1.jpg'; // Import Sofa 1 image
import Sofa2 from './image/Sofa2.jpg'; // Import Sofa 2 image
import Sofa3 from './image/Sofa3.jpg'; // Import Sofa 3 image


const sofaData = {
  sofa1: {
    name: 'Grace Sofa',
    category: 'Sofa',
    details: `This is a comfortable, upholstered seating piece designed for multiple people. 
    Found in living rooms, it comes in various shapes and sizes, often with armrests and backrests.`,
    image: Sofa1
  },
  sofa2: {
    name: 'L Shape Sofa',
    category: 'Sofa',
    details: `Sofa set 3+2+1 & 3+2+1+1. 
    Frame constructed with pine solid wood with high quality foam and fabric.`,
    image: Sofa2
  },
  sofa3: {
    name: 'Anbessa Sofa',
    category: 'sofa',
    details: `L-shape and modern, suitable for medium size salon. Covered with high-quality fabric in various colors.`,
    image: Sofa3
  },
};

function SofaDetails() {
    const { productId } = useParams(); // Get productId from URL
    const product = sofaData[productId]; // Look up product details
  
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
            <p><b>Category:</b> {product.category}</p>
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
  
  export default SofaDetails;
  
