import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const KidsProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('2');
  const [quantity, setQuantity] = useState(1);

  // Kids product data (28 items)
  const products = [
    {
      id: 1,
      title: 'RTW | SHIRT & SHORTS',
      category: 'COTTON | PRINTED',
      sku: 'KS89-9-2P01-KS89-9-2P01-K',
      price: 'PKR 2,990',
      image: '/images/kid.png',
      color: 'Blue',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt and shorts set with printed design. Perfect for casual play and everyday wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 2,
      title: 'RTW | DRESS',
      category: 'LAWN | PRINTED',
      sku: 'KS89-9-2P02-KS89-9-2P02-K',
      price: 'PKR 1,990',
      image: '/images/kid2.jpg',
      color: 'Pink',
      fabric: 'LAWN',
      description: 'Beautiful lawn dress with printed pattern. Lightweight and comfortable for summer wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 3,
      title: 'RTW | KURTA',
      category: 'COTTON | EMBROIDERED',
      sku: 'KS89-9-2P03-KS89-9-2P03-K',
      price: 'PKR 2,490',
      image: '/images/kid.png',
      color: 'Green',
      fabric: 'COTTON',
      description: 'Traditional cotton kurta with beautiful embroidery work. Perfect for festive occasions and cultural events.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 4,
      title: 'RTW | SHIRT & TROUSER',
      category: 'LAWN | SOLID',
      sku: 'KS89-9-2P04-KS89-9-2P04-K',
      price: 'PKR 3,290',
      image: '/images/kid2.jpg',
      color: 'White',
      fabric: 'LAWN',
      description: 'Comfortable lawn shirt and trouser set in solid color. Ideal for formal occasions and school wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 5,
      title: 'RTW | FROCK',
      category: 'CAMBRIC | PRINTED',
      sku: 'KS89-9-2P05-KS89-9-2P05-K',
      price: 'PKR 2,190',
      image: '/images/kid.png',
      color: 'Yellow',
      fabric: 'CAMBRIC',
      description: 'Charming cambric frock with printed design. Perfect for special occasions and parties.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 6,
      title: 'RTW | SHIRT',
      category: 'COTTON | SOLID',
      sku: 'KS89-9-2P06-KS89-9-2P06-K',
      price: 'PKR 1,590',
      image: '/images/kid2.jpg',
      color: 'Red',
      fabric: 'COTTON',
      description: 'Classic cotton shirt in solid color. Versatile piece for both casual and formal wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 7,
      title: 'RTW | KURTA & PYJAMA',
      category: 'LAWN | EMBROIDERED',
      sku: 'KS89-9-2P07-KS89-9-2P07-K',
      price: 'PKR 3,890',
      image: '/images/kid.png',
      color: 'Purple',
      fabric: 'LAWN',
      description: 'Comfortable lawn kurta and pyjama set with embroidered details. Perfect for cultural events.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 8,
      title: 'RTW | SHIRT & SHORTS',
      category: 'COTTON | PRINTED',
      sku: 'KS89-9-2P08-KS89-9-2P08-K',
      price: 'PKR 2,790',
      image: '/images/kid2.jpg',
      color: 'Orange',
      fabric: 'COTTON',
      description: 'Fun cotton shirt and shorts set with printed pattern. Great for outdoor activities.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 9,
      title: 'RTW | DRESS',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'KS89-9-2P09-KS89-9-2P09-K',
      price: 'PKR 2,990',
      image: '/images/kid.png',
      color: 'Lavender',
      fabric: 'CAMBRIC',
      description: 'Elegant cambric dress with embroidered details. Perfect for special celebrations.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 10,
      title: 'RTW | SHIRT & TROUSER',
      category: 'LAWN | PRINTED',
      sku: 'KS89-9-2P10-KS89-9-2P10-K',
      price: 'PKR 3,190',
      image: '/images/kid2.jpg',
      color: 'Mint',
      fabric: 'LAWN',
      description: 'Comfortable lawn shirt and trouser set with printed design. Ideal for casual wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 11,
      title: 'RTW | KURTA',
      category: 'COTTON | SOLID',
      sku: 'KS89-9-2P11-KS89-9-2P11-K',
      price: 'PKR 2,090',
      image: '/images/kid.png',
      color: 'Navy',
      fabric: 'COTTON',
      description: 'Simple cotton kurta in solid color. Perfect for everyday wear and school.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 12,
      title: 'RTW | FROCK',
      category: 'LAWN | EMBROIDERED',
      sku: 'KS89-9-2P12-KS89-9-2P12-K',
      price: 'PKR 3,490',
      image: '/images/kid2.jpg',
      color: 'Rose',
      fabric: 'LAWN',
      description: 'Beautiful lawn frock with embroidered details. Perfect for parties and special occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 13,
      title: 'RTW | SHIRT & SHORTS',
      category: 'CAMBRIC | PRINTED',
      sku: 'KS89-9-2P13-KS89-9-2P13-K',
      price: 'PKR 2,390',
      image: '/images/kid.png',
      color: 'Turquoise',
      fabric: 'CAMBRIC',
      description: 'Stylish cambric shirt and shorts set with printed pattern. Great for casual occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 14,
      title: 'RTW | KURTA & PYJAMA',
      category: 'COTTON | EMBROIDERED',
      sku: 'KS89-9-2P14-KS89-9-2P14-K',
      price: 'PKR 3,690',
      image: '/images/kid2.jpg',
      color: 'Emerald',
      fabric: 'COTTON',
      description: 'Elegant cotton kurta and pyjama set with embroidery work. Perfect for cultural events.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 15,
      title: 'RTW | DRESS',
      category: 'LAWN | SOLID',
      sku: 'KS89-9-2P15-KS89-9-2P15-K',
      price: 'PKR 2,290',
      image: '/images/kid.png',
      color: 'Peach',
      fabric: 'LAWN',
      description: 'Simple lawn dress in solid color. Perfect for everyday wear and school.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 16,
      title: 'RTW | SHIRT & TROUSER',
      category: 'COTTON | PRINTED',
      sku: 'KS89-9-2P16-KS89-9-2P16-K',
      price: 'PKR 2,890',
      image: '/images/kid2.jpg',
      color: 'Sage',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt and trouser set with printed design. Great for casual wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 17,
      title: 'RTW | FROCK',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'KS89-9-2P17-KS89-9-2P17-K',
      price: 'PKR 3,190',
      image: '/images/kid.png',
      color: 'Coral',
      fabric: 'CAMBRIC',
      description: 'Charming cambric frock with embroidered details. Perfect for special occasions.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 18,
      title: 'RTW | SHIRT & SHORTS',
      category: 'LAWN | PRINTED',
      sku: 'KS89-9-2P18-KS89-9-2P18-K',
      price: 'PKR 2,590',
      image: '/images/kid2.jpg',
      color: 'Lemon',
      fabric: 'LAWN',
      description: 'Bright lawn shirt and shorts set with printed pattern. Great for summer activities.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 19,
      title: 'RTW | KURTA',
      category: 'COTTON | SOLID',
      sku: 'KS89-9-2P19-KS89-9-2P19-K',
      price: 'PKR 1,890',
      image: '/images/kid.png',
      color: 'Brown',
      fabric: 'COTTON',
      description: 'Classic cotton kurta in solid color. Versatile piece for everyday wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 20,
      title: 'RTW | DRESS',
      category: 'CAMBRIC | PRINTED',
      sku: 'KS89-9-2P20-KS89-9-2P20-K',
      price: 'PKR 2,690',
      image: '/images/kid2.jpg',
      color: 'Indigo',
      fabric: 'CAMBRIC',
      description: 'Beautiful cambric dress with printed design. Perfect for casual and semi-formal occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 21,
      title: 'RTW | KURTA & PYJAMA',
      category: 'LAWN | EMBROIDERED',
      sku: 'KS89-9-2P21-KS89-9-2P21-K',
      price: 'PKR 3,790',
      image: '/images/kid.png',
      color: 'Magenta',
      fabric: 'LAWN',
      description: 'Elegant lawn kurta and pyjama set with embroidered details. Perfect for cultural celebrations.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 22,
      title: 'RTW | SHIRT & TROUSER',
      category: 'COTTON | PRINTED',
      sku: 'KS89-9-2P22-KS89-9-2P22-K',
      price: 'PKR 2,990',
      image: '/images/kid2.jpg',
      color: 'Cyan',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt and trouser set with printed pattern. Great for everyday wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 23,
      title: 'RTW | FROCK',
      category: 'CAMBRIC | SOLID',
      sku: 'KS89-9-2P23-KS89-9-2P23-K',
      price: 'PKR 2,190',
      image: '/images/kid.png',
      color: 'Gold',
      fabric: 'CAMBRIC',
      description: 'Simple cambric frock in solid color. Perfect for school and everyday wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 24,
      title: 'RTW | SHIRT & SHORTS',
      category: 'LAWN | PRINTED',
      sku: 'KS89-9-2P24-KS89-9-2P24-K',
      price: 'PKR 2,390',
      image: '/images/kid2.jpg',
      color: 'Silver',
      fabric: 'LAWN',
      description: 'Stylish lawn shirt and shorts set with printed design. Great for casual occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 25,
      title: 'RTW | KURTA',
      category: 'COTTON | EMBROIDERED',
      sku: 'KS89-9-2P25-KS89-9-2P25-K',
      price: 'PKR 2,490',
      image: '/images/kid.png',
      color: 'Ruby',
      fabric: 'COTTON',
      description: 'Beautiful cotton kurta with embroidered details. Perfect for festive occasions.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 26,
      title: 'RTW | DRESS',
      category: 'CAMBRIC | PRINTED',
      sku: 'KS89-9-2P26-KS89-9-2P26-K',
      price: 'PKR 2,790',
      image: '/images/kid2.jpg',
      color: 'Plum',
      fabric: 'CAMBRIC',
      description: 'Charming cambric dress with printed pattern. Perfect for parties and celebrations.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 27,
      title: 'RTW | SHIRT & TROUSER',
      category: 'LAWN | SOLID',
      sku: 'KS89-9-2P27-KS89-9-2P27-K',
      price: 'PKR 2,890',
      image: '/images/kid.png',
      color: 'Cream',
      fabric: 'LAWN',
      description: 'Comfortable lawn shirt and trouser set in solid color. Ideal for formal occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 28,
      title: 'RTW | FROCK',
      category: 'COTTON | PRINTED',
      sku: 'KS89-9-2P28-KS89-9-2P28-K',
      price: 'PKR 2,190',
      image: '/images/kid2.jpg',
      color: 'Lime',
      fabric: 'COTTON',
      description: 'Fun cotton frock with printed design. Perfect for casual play and everyday wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/kids')} className="back-button">
          Back to Kids Collection
        </button>
      </div>
    );
  }

  const sizes = ['1', '2', '3', '4', '5', '6'];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.title} (Size: ${selectedSize}) to cart!`);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-section">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.title} className="product-main-image" />
          </div>
        </div>

        <div className="product-details-section">
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-sku">SKU: {product.sku}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-stock">IN STOCK</p>

            <div className="size-section">
              <label className="size-label">Size:</label>
              <div className="size-options">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="color-section">
              <label className="color-label">Color: {product.color}</label>
              <div className="color-swatch" style={{ backgroundColor: product.color.toLowerCase() }}></div>
            </div>

            <div className="fabric-section">
              <label className="fabric-label">Fabric:</label>
              <button className="fabric-button">{product.fabric}</button>
            </div>

            <div className="quantity-section">
              <label className="quantity-label">Quantity:</label>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn minus" 
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  readOnly
                  className="quantity-input"
                />
                <button 
                  className="quantity-btn plus" 
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>

            <div className="description-section">
              <div className="description-header">
                <span>DESCRIPTION</span>
                <span className="expand-icon">+</span>
              </div>
              <div className="description-content">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="care-instructions">
              {product.careInstructions.map((instruction, index) => (
                <span key={index} className="care-tag">
                  {instruction}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsProductDetail;
