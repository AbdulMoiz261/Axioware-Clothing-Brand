import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WomenPage.css';

const WomenPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  const categories = [
    {
      id: 1,
      name: 'READY TO STITCH',
      image: '/images/1.webp'
    },
    {
      id: 2,
      name: 'READY TO WEAR',
      image: '/images/2.webp'
    },
    {
      id: 3,
      name: 'MID SUMMER',
      image: '/images/3.webp'
    },
    {
      id: 4,
      name: 'CO-ORD SETS',
      image: '/images/4.webp'
    }
  ];

  const products = [
    {
      id: 1,
      category: 'YARN DYED | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 5,990',
      image: '/images/1.webp'
    },
    {
      id: 2,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT',
      price: 'PKR 1,990',
      image: '/images/2.webp'
    },
    {
      id: 3,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | SHIRT, CULOTTE & DUPATTA',
      price: 'PKR 8,390',
      image: '/images/3.webp'
    },
    {
      id: 4,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | SHIRT & CULOTTE',
      price: 'PKR 4,190',
      image: '/images/4.webp'
    },
    {
      id: 5,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | KURTA & PALAZZO',
      price: 'PKR 6,590',
      image: '/images/5.webp'
    },
    {
      id: 6,
      category: 'COTTON | PRINTED',
      items: 'RTW | DRESS',
      price: 'PKR 3,290',
      image: '/images/6.webp'
    },
    {
      id: 7,
      category: 'SILK | EMBROIDERED',
      items: 'RTW | LEHENGA & CHOLI',
      price: 'PKR 15,990',
      image: '/images/7.webp'
    },
    {
      id: 8,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 4,590',
      image: '/images/8.webp'
    },
    {
      id: 9,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | KURTA & DUPATTA',
      price: 'PKR 7,290',
      image: '/images/9.jpg'
    },
    {
      id: 10,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & CULOTTE',
      price: 'PKR 3,890',
      image: '/images/10.webp'
    },
    {
      id: 11,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | DRESS',
      price: 'PKR 5,490',
      image: '/images/11.jpg'
    },
    {
      id: 12,
      category: 'SILK | PRINTED',
      items: 'RTW | KURTA & PALAZZO',
      price: 'PKR 9,990',
      image: '/images/12.jpg'
    },
    {
      id: 13,
      category: 'CAMBRIC | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 4,190',
      image: '/images/13.jpg'
    },
    {
      id: 14,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | KURTA & DUPATTA',
      price: 'PKR 6,890',
      image: '/images/14.webp'
    },
    {
      id: 15,
      category: 'COTTON | PRINTED',
      items: 'RTW | DRESS',
      price: 'PKR 2,990',
      image: '/images/15.webp'
    },
    {
      id: 16,
      category: 'SILK | EMBROIDERED',
      items: 'RTW | LEHENGA',
      price: 'PKR 12,990',
      image: '/images/16.webp'
    },
    {
      id: 17,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & CULOTTE',
      price: 'PKR 3,590',
      image: '/images/17.webp'
    },
    {
      id: 18,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | KURTA & PALAZZO',
      price: 'PKR 7,890',
      image: '/images/18.jpg'
    },
    {
      id: 19,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 3,290',
      image: '/images/19.webp'
    },
    {
      id: 20,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | DRESS',
      price: 'PKR 5,190',
      image: '/images/20.webp'
    },
    {
      id: 21,
      category: 'SILK | PRINTED',
      items: 'RTW | KURTA & DUPATTA',
      price: 'PKR 8,990',
      image: '/images/21.webp'
    },
    {
      id: 22,
      category: 'CAMBRIC | PRINTED',
      items: 'RTW | SHIRT & CULOTTE',
      price: 'PKR 4,590',
      image: '/images/22.webp'
    },
    {
      id: 23,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | KURTA & PALAZZO',
      price: 'PKR 6,290',
      image: '/images/23.jpg'
    },
    {
      id: 24,
      category: 'COTTON | PRINTED',
      items: 'RTW | DRESS',
      price: 'PKR 2,790',
      image: '/images/24.jpg'
    },
    {
      id: 25,
      category: 'SILK | EMBROIDERED',
      items: 'RTW | LEHENGA & CHOLI',
      price: 'PKR 14,990',
      image: '/images/25.jpg'
    },
    {
      id: 26,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 4,190',
      image: '/images/26.webp'
    },
    {
      id: 27,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | KURTA & DUPATTA',
      price: 'PKR 7,590',
      image: '/images/27.jpeg'
    },
    {
      id: 28,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & CULOTTE',
      price: 'PKR 3,490',
      image: '/images/28.jpg'
    }
  ];

  return (
    <div className="women-page">
      {/* Category Section */}
      <div className="category-section">
        <div className="category-wrapper">
          <div className="category-grid-left">
            {categories.slice(0, 2).map((category) => (
              <div key={category.id} className="category-item">
                <div className="category-button">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-label">{category.name}</div>
              </div>
            ))}
          </div>
          
          <h1 className="category-title">WOMEN</h1>
          
          <div className="category-grid-right">
            {categories.slice(2, 4).map((category) => (
              <div key={category.id} className="category-item">
                <div className="category-button">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-label">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="product-showcase-section">
        <div className="product-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image">
                <img src={product.image} alt="Product" />
                <div className="product-overlay">
                  <div className="product-category">{product.category}</div>
                  <div className="product-items">{product.items}</div>
                  <div className="product-price">{product.price}</div>
                </div>
                <button 
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart functionality can be added here
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenPage;