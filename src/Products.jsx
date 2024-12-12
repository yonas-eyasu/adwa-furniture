
import React, { useState } from 'react';
import './Product.css';
import Sofa1 from './image/Sofa1.jpg';
import Sofa2 from './image/Sofa2.jpg';
import Sofa3 from './image/Sofa3.jpg';
import Dining1 from './image/Dining1.jpg';
import Dining2 from './image/Dining2.jpg';
import Dining3 from './image/Dining3.jpg';
import Kitchen1 from './image/Kitchen1.jpg';
import Kitchen2 from './image/Kitchen2.jpg';
import Kitchen3 from './image/Kitchen3.jpg';
import sectionbg from './image/sectionbg.png';
import { Link } from 'react-router-dom';

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Product data for all categories
  const productData = {
    all: [
      { id: 'sofa1', image: Sofa1, alt: 'Grace Sofa', to: '/product-details/sofa/sofa1', title: 'Grace Sofa' },
      { id: 'sofa2', image: Sofa2, alt: 'Anbessa Sofa', to: '/product-details/sofa/sofa2', title: 'Anbessa Sofa' },
      { id: 'sofa3', image: Sofa3, alt: 'L Shape Sofa', to: '/product-details/sofa/sofa3', title: 'L Shape Sofa' },
      { id: 'dining1', image: Dining1, alt: 'Dining Set 1', to: '/product-details/dining/dining1', title: 'Dining Set 1' },
      { id: 'dining2', image: Dining2, alt: 'Dining Set 2', to: '/product-details/dining/dining2', title: 'Dining Set 2' },
      { id: 'dining3', image: Dining3, alt: 'Dining Set 3', to: '/product-details/dining/dining3', title: 'Dining Set 3' },
      { id: 'kitchen1', image: Kitchen1, alt: 'Kitchen Cabinet 1', to: '/product-details/kitchen/kitchen1', title: 'Kitchen Cabinet 1' },
      { id: 'kitchen2', image: Kitchen2, alt: 'Kitchen Cabinet 2', to: '/product-details/kitchen/kitchen2', title: 'Kitchen Cabinet 2' },
      { id: 'kitchen3', image: Kitchen3, alt: 'Kitchen Cabinet 3', to: '/product-details/kitchen/kitchen3', title: 'Kitchen Cabinet 3' },
    ],
    sofa: [
      { id: 'sofa1', image: Sofa1, alt: 'Grace Sofa', to: '/product-details/sofa/sofa1', title: 'Grace Sofa' },
      { id: 'sofa2', image: Sofa2, alt: 'Anbessa Sofa', to: '/product-details/sofa/sofa2', title: 'Anbessa Sofa' },
      { id: 'sofa3', image: Sofa3, alt: 'L Shape Sofa', to: '/product-details/sofa/sofa3', title: 'L Shape Sofa' },
    ],
    dining: [
      { id: 'dining1', image: Dining1, alt: 'Dining Set 1', to: '/product-details/dining/dining1', title: 'Dining Set 1' },
      { id: 'dining2', image: Dining2, alt: 'Dining Set 2', to: '/product-details/dining/dining2', title: 'Dining Set 2' },
      { id: 'dining3', image: Dining3, alt: 'Dining Set 3', to: '/product-details/dining/dining3', title: 'Dining Set 3' },
    ],
    kitchen: [
      { id: 'kitchen1', image: Kitchen1, alt: 'Kitchen Cabinet 1', to: '/product-details/kitchen/kitchen1', title: 'Kitchen Cabinet 1' },
      { id: 'kitchen2', image: Kitchen2, alt: 'Kitchen Cabinet 2', to: '/product-details/kitchen/kitchen2', title: 'Kitchen Cabinet 2' },
      { id: 'kitchen3', image: Kitchen3, alt: 'Kitchen Cabinet 3', to: '/product-details/kitchen/kitchen3', title: 'Kitchen Cabinet 3' },
    ],
  };

  return (
    <div>
      <div className="all">
        <div className="text">
          <div className="content-center">
            <div style={{ backgroundImage: `url(${sectionbg})` }} className="bgimg">
              <h1>PRODUCTS</h1>
            </div>
            <p>These are a list of our Products</p>
          </div>

          {/* Category filter links */}
          <div className="category-links">
            <a href="#all_product" onClick={() => handleCategoryClick('all')}>
              ALL
            </a>
            <a href="#sofa" onClick={() => handleCategoryClick('sofa')}>
              SOFA
            </a>
            <a href="#dining" onClick={() => handleCategoryClick('dining')}>
              DINING ROOM
            </a>
            <a href="#kitchen" onClick={() => handleCategoryClick('kitchen')}>
              KITCHEN CABINET
            </a>
          </div>
        </div>

        <div className="album" id="all_product">
          {/* Dynamically render products based on active category */}
          {productData[activeCategory].map((product) => (
            <div key={product.id} className="furniture">
              <Link to={product.to}>
                <img src={product.image} alt={product.alt} className="furniture-image" />
              </Link>
              <div className="detail">
                <h3>{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
