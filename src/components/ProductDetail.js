import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('6');
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: parseInt(id),
    title: 'RTW | SHIRT & TROUSER',
    category: 'YARN DYED | PRINTED',
    sku: 'BS89-9-2P25-BS89-9-2P25-6',
    price: 'PKR 5,990',
    image: `/images/${id}.webp`,
    color: 'Beige',
    fabric: 'YARN DYED',
    description: 'Beautiful yarn-dyed shirt and trouser set featuring subtle printed patterns. Made from premium quality fabric for comfort and style.',
    careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
  };

  const sizes = ['6', '8', '10', '12', '14', '16'];

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

export default ProductDetail;
