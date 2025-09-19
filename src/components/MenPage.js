import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenPage.css';

const MenPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/men/${productId}`);
  };

  const categories = [
    {
      id: 1,
      name: 'READY TO STITCH',
      image: '/images/m4.webp'
    },
    {
      id: 2,
      name: 'READY TO WEAR',
      image: '/images/m5.webp'
    },
    {
      id: 3,
      name: 'FORMAL COLLECTION',
      image: '/images/m1.webp'
    },
    {
      id: 4,
      name: 'CASUAL WEAR',
      image: '/images/m2.webp'
    }
  ];

  const products = [
    {
      id: 1,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT',
      price: 'PKR 2,990',
      image: '/images/m1.webp'
    },
    {
      id: 2,
      category: 'LINEN | SOLID',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 4,590',
      image: '/images/m2.webp'
    },
    {
      id: 3,
      category: 'COTTON | EMBROIDERED',
      items: 'RTW | KURTA',
      price: 'PKR 3,890',
      image: '/images/m3.webp'
    },
    {
      id: 4,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & CULOTTE',
      price: 'PKR 3,290',
      image: '/images/m4.webp'
    },
    {
      id: 5,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | KURTA & TROUSER',
      price: 'PKR 5,490',
      image: '/images/m5.webp'
    },
    {
      id: 6,
      category: 'COTTON | SOLID',
      items: 'RTW | SHIRT',
      price: 'PKR 2,190',
      image: '/images/m6.webp'
    },
    {
      id: 7,
      category: 'SILK | EMBROIDERED',
      items: 'RTW | SHERWANI',
      price: 'PKR 12,990',
      image: '/images/m7.webp'
    },
    {
      id: 8,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 3,590',
      image: '/images/m8.webp'
    },
    {
      id: 9,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | KURTA',
      price: 'PKR 4,290',
      image: '/images/m9.webp'
    },
    {
      id: 10,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & CULOTTE',
      price: 'PKR 2,890',
      image: '/images/m10.webp'
    },
    {
      id: 11,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | KURTA',
      price: 'PKR 4,890',
      image: '/images/m11.webp'
    },
    {
      id: 12,
      category: 'SILK | PRINTED',
      items: 'RTW | SHERWANI',
      price: 'PKR 9,990',
      image: '/images/m12.jpg'
    },
    {
      id: 13,
      category: 'CAMBRIC | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 3,190',
      image: '/images/m13.webp'
    },
    {
      id: 14,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | KURTA',
      price: 'PKR 5,290',
      image: '/images/m14.webp'
    },
    {
      id: 15,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT',
      price: 'PKR 2,390',
      image: '/images/m1.webp'
    },
    {
      id: 16,
      category: 'SILK | EMBROIDERED',
      items: 'RTW | SHERWANI',
      price: 'PKR 11,990',
      image: '/images/m16.webp'
    },
    {
      id: 17,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & CULOTTE',
      price: 'PKR 3,290',
      image: '/images/m17.webp'
    },
    {
      id: 18,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | KURTA & TROUSER',
      price: 'PKR 6,890',
      image: '/images/m18.webp'
    },
    {
      id: 19,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 2,790',
      image: '/images/m19.webp'
    },
    {
      id: 20,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | KURTA',
      price: 'PKR 4,590',
      image: '/images/m20.webp'
    }
  ];

  return (
    <div className="men-page">
      {/* Category Section */}
      <div className="category-section">
        {/* Professional Background Animation */}
        <div className="animation-container">
          <div className="grid-lines"></div>
          <div className="subtle-glow glow-1"></div>
          <div className="subtle-glow glow-2"></div>
          <div className="floating-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
          <div className="geometric-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
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
          
          <h1 className="category-title">MEN</h1>
          
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

export default MenPage;
