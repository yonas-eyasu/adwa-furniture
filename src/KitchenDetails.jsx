import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import './Detail.css';
import Kitchen1 from './image/Kitchen1.jpg';
import Kitchen2 from './image/Kitchen2.jpg';
import Kitchen3 from './image/Kitchen3.jpg';


const kitchenData = {
    kitchen1: {
        name: 'Elegant Marble Cabinet',
        category: 'Kitchen',
        details: `This stunning kitchen cabinet features a luxurious marble finish, offering both style and functionality. Designed with ample storage space, it helps keep your kitchen organized while adding a touch of sophistication. The cabinet's sturdy structure ensures durability, making it a perfect addition to any modern kitchen.`,
        image: Kitchen1
      },
      kitchen2: {
        name: 'Sleek Modern Cabinet',
        category: 'Kitchen',
        details: `This contemporary kitchen cabinet boasts a minimalist design with high-quality materials. Equipped with spacious shelves and practical drawer storage, it provides easy access to kitchen essentials.</p>
                  Available in various colors and finishes, it can be customized to suit your personal style and enhance your kitchen's aesthetic.</p>`,
        image: Kitchen2
      },
      kitchen3: {
        name: 'Versatile Lira Cabinet',
        category: 'Kitchen',
        details: `The Lira Kitchen Cabinet combines modern design with exceptional functionality. Crafted from durable materials, it offers ample storage space for dishes, cookware, and pantry items. Its sleek lines and versatile style make it a perfect fit for any kitchen, effortlessly blending with both contemporary and traditional decor.`,
        image: Kitchen3
      }
};

function KitchenDetails() {
    const { productId } = useParams(); // Get productId from URL
    const product = kitchenData[productId]; // Look up product details
  
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
  
  export default KitchenDetails;