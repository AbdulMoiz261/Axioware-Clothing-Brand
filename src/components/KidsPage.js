import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KidsPage.css';

const KidsPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/kids/${productId}`);
  };

  const categories = [
    {
      id: 1,
      name: 'READY TO STITCH',
      image: '/images/kid.png'
    },
    {
      id: 2,
      name: 'READY TO WEAR',
      image: '/images/kid2.jpg'
    },
    {
      id: 3,
      name: 'MID SUMMER',
      image: '/images/kid.png'
    },
    {
      id: 4,
      name: 'CO-ORD SETS',
      image: '/images/kid2.jpg'
    }
  ];

  const products = [
    {
      id: 1,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & SHORTS',
      price: 'PKR 2,990',
      image: '/images/kid.png'
    },
    {
      id: 2,
      category: 'LAWN | PRINTED',
      items: 'RTW | DRESS',
      price: 'PKR 1,990',
      image: '/images/kid2.jpg'
    },
    {
      id: 3,
      category: 'COTTON | EMBROIDERED',
      items: 'RTW | KURTA',
      price: 'PKR 2,490',
      image: '/images/kid.png'
    },
    {
      id: 4,
      category: 'LAWN | SOLID',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 3,290',
      image: '/images/kid2.jpg'
    },
    {
      id: 5,
      category: 'CAMBRIC | PRINTED',
      items: 'RTW | FROCK',
      price: 'PKR 2,190',
      image: '/images/kid.png'
    },
    {
      id: 6,
      category: 'COTTON | SOLID',
      items: 'RTW | SHIRT',
      price: 'PKR 1,590',
      image: '/images/kid2.jpg'
    },
    {
      id: 7,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | KURTA & PYJAMA',
      price: 'PKR 3,890',
      image: '/images/kid.png'
    },
    {
      id: 8,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & SHORTS',
      price: 'PKR 2,790',
      image: '/images/kid2.jpg'
    },
    {
      id: 9,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | DRESS',
      price: 'PKR 2,990',
      image: '/images/kid.png'
    },
    {
      id: 10,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 3,190',
      image: '/images/kid2.jpg'
    },
    {
      id: 11,
      category: 'COTTON | SOLID',
      items: 'RTW | KURTA',
      price: 'PKR 2,090',
      image: '/images/kid.png'
    },
    {
      id: 12,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | FROCK',
      price: 'PKR 3,490',
      image: '/images/kid2.jpg'
    },
    {
      id: 13,
      category: 'CAMBRIC | PRINTED',
      items: 'RTW | SHIRT & SHORTS',
      price: 'PKR 2,390',
      image: '/images/kid.png'
    },
    {
      id: 14,
      category: 'COTTON | EMBROIDERED',
      items: 'RTW | KURTA & PYJAMA',
      price: 'PKR 3,690',
      image: '/images/kid2.jpg'
    },
    {
      id: 15,
      category: 'LAWN | SOLID',
      items: 'RTW | DRESS',
      price: 'PKR 2,290',
      image: '/images/kid.png'
    },
    {
      id: 16,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 2,890',
      image: '/images/kid2.jpg'
    },
    {
      id: 17,
      category: 'CAMBRIC | EMBROIDERED',
      items: 'RTW | FROCK',
      price: 'PKR 3,190',
      image: '/images/kid.png'
    },
    {
      id: 18,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & SHORTS',
      price: 'PKR 2,590',
      image: '/images/kid2.jpg'
    },
    {
      id: 19,
      category: 'COTTON | SOLID',
      items: 'RTW | KURTA',
      price: 'PKR 1,890',
      image: '/images/kid.png'
    },
    {
      id: 20,
      category: 'CAMBRIC | PRINTED',
      items: 'RTW | DRESS',
      price: 'PKR 2,690',
      image: '/images/kid2.jpg'
    },
    {
      id: 21,
      category: 'LAWN | EMBROIDERED',
      items: 'RTW | KURTA & PYJAMA',
      price: 'PKR 3,790',
      image: '/images/kid.png'
    },
    {
      id: 22,
      category: 'COTTON | PRINTED',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 2,990',
      image: '/images/kid2.jpg'
    },
    {
      id: 23,
      category: 'CAMBRIC | SOLID',
      items: 'RTW | FROCK',
      price: 'PKR 2,190',
      image: '/images/kid.png'
    },
    {
      id: 24,
      category: 'LAWN | PRINTED',
      items: 'RTW | SHIRT & SHORTS',
      price: 'PKR 2,390',
      image: '/images/kid2.jpg'
    },
    {
      id: 25,
      category: 'COTTON | EMBROIDERED',
      items: 'RTW | KURTA',
      price: 'PKR 2,490',
      image: '/images/kid.png'
    },
    {
      id: 26,
      category: 'CAMBRIC | PRINTED',
      items: 'RTW | DRESS',
      price: 'PKR 2,790',
      image: '/images/kid2.jpg'
    },
    {
      id: 27,
      category: 'LAWN | SOLID',
      items: 'RTW | SHIRT & TROUSER',
      price: 'PKR 2,890',
      image: '/images/kid.png'
    },
    {
      id: 28,
      category: 'COTTON | PRINTED',
      items: 'RTW | FROCK',
      price: 'PKR 2,190',
      image: '/images/kid2.jpg'
    }
  ];

  return (
    <div className="kids-page">
      <div className="page-header">
        <h1 className="page-title">KIDS COLLECTION</h1>
        <p className="page-subtitle">Discover our amazing kids' clothing collection</p>
      </div>

      <div className="category-showcase">
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-button">
              <img src={category.image} alt={category.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="product-showcase-section">
        <div className="product-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.items} className="product-image" />
              </div>
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-title">{product.items}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
