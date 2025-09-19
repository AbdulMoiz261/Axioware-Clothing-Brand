import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import ContactUs from './ContactUs';
import Footer from './Footer';

const MenProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // Men's product data (28 items)
  const products = [
    {
      id: 1,
      title: 'RTW | SHIRT',
      category: 'COTTON | PRINTED',
      sku: 'MS89-9-2P01-MS89-9-2P01-M',
      price: 'PKR 2,990',
      image: '/images/m1.webp',
      color: 'Navy',
      fabric: 'COTTON',
      description: 'Premium cotton shirt with printed design. Perfect for casual and formal occasions. Made with high-quality cotton for comfort and durability.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 2,
      title: 'RTW | SHIRT & TROUSER',
      category: 'LINEN | SOLID',
      sku: 'MS89-9-2P02-MS89-9-2P02-M',
      price: 'PKR 4,590',
      image: '/images/m2.webp',
      color: 'White',
      fabric: 'LINEN',
      description: 'Comfortable linen shirt and trouser set in solid color. Ideal for summer wear with breathable fabric.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 3,
      title: 'RTW | KURTA',
      category: 'COTTON | EMBROIDERED',
      sku: 'MS89-9-2P03-MS89-9-2P03-M',
      price: 'PKR 3,890',
      image: '/images/m3.webp',
      color: 'Black',
      fabric: 'COTTON',
      description: 'Traditional cotton kurta with beautiful embroidery work. Perfect for festive occasions and cultural events.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 4,
      title: 'RTW | SHIRT & CULOTTE',
      category: 'LAWN | PRINTED',
      sku: 'MS89-9-2P04-MS89-9-2P04-M',
      price: 'PKR 3,290',
      image: '/images/m4.webp',
      color: 'Blue',
      fabric: 'LAWN',
      description: 'Stylish lawn shirt and culotte set with printed pattern. Comfortable for casual outings.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 5,
      title: 'RTW | KURTA & TROUSER',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'MS89-9-2P05-MS89-9-2P05-M',
      price: 'PKR 5,490',
      image: '/images/m5.webp',
      color: 'Green',
      fabric: 'CAMBRIC',
      description: 'Elegant cambric kurta and trouser set with intricate embroidery. Perfect for special occasions.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 6,
      title: 'RTW | SHIRT',
      category: 'COTTON | SOLID',
      sku: 'MS89-9-2P06-MS89-9-2P06-M',
      price: 'PKR 2,190',
      image: '/images/m6.webp',
      color: 'Gray',
      fabric: 'COTTON',
      description: 'Classic cotton shirt in solid color. Versatile piece for both casual and semi-formal wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 7,
      title: 'RTW | SHERWANI',
      category: 'SILK | EMBROIDERED',
      sku: 'MS89-9-2P07-MS89-9-2P07-M',
      price: 'PKR 12,990',
      image: '/images/m7.webp',
      color: 'Gold',
      fabric: 'SILK',
      description: 'Luxurious silk sherwani with intricate embroidery. Perfect for weddings and grand celebrations.',
      careInstructions: ['Dry clean only', 'Do not use bleach', 'Store carefully']
    },
    {
      id: 8,
      title: 'RTW | SHIRT & TROUSER',
      category: 'LAWN | PRINTED',
      sku: 'MS89-9-2P08-MS89-9-2P08-M',
      price: 'PKR 3,590',
      image: '/images/m8.webp',
      color: 'Red',
      fabric: 'LAWN',
      description: 'Comfortable lawn shirt and trouser set with printed design. Ideal for casual occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 9,
      title: 'RTW | KURTA',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'MS89-9-2P09-MS89-9-2P09-M',
      price: 'PKR 4,290',
      image: '/images/m9.webp',
      color: 'Maroon',
      fabric: 'CAMBRIC',
      description: 'Beautiful cambric kurta with embroidered details. Perfect for cultural and festive events.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 10,
      title: 'RTW | SHIRT & CULOTTE',
      category: 'COTTON | PRINTED',
      sku: 'MS89-9-2P10-MS89-9-2P10-M',
      price: 'PKR 2,890',
      image: '/images/m10.webp',
      color: 'Brown',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt and culotte set with printed pattern. Great for casual wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 11,
      title: 'RTW | KURTA',
      category: 'LAWN | EMBROIDERED',
      sku: 'MS89-9-2P11-MS89-9-2P11-M',
      price: 'PKR 4,890',
      image: '/images/m11.webp',
      color: 'Purple',
      fabric: 'LAWN',
      description: 'Elegant lawn kurta with embroidery work. Perfect for semi-formal occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 12,
      title: 'RTW | SHERWANI',
      category: 'SILK | PRINTED',
      sku: 'MS89-9-2P12-MS89-9-2P12-M',
      price: 'PKR 9,990',
      image: '/images/m12.webp',
      color: 'Silver',
      fabric: 'SILK',
      description: 'Stunning silk sherwani with printed design. Perfect for special celebrations.',
      careInstructions: ['Dry clean only', 'Do not use bleach', 'Store carefully']
    },
    {
      id: 13,
      title: 'RTW | SHIRT & TROUSER',
      category: 'CAMBRIC | PRINTED',
      sku: 'MS89-9-2P13-MS89-9-2P13-M',
      price: 'PKR 3,190',
      image: '/images/m13.webp',
      color: 'Teal',
      fabric: 'CAMBRIC',
      description: 'Stylish cambric shirt and trouser set with printed pattern. Comfortable for daily wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 14,
      title: 'RTW | KURTA',
      category: 'LAWN | EMBROIDERED',
      sku: 'MS89-9-2P14-MS89-9-2P14-M',
      price: 'PKR 5,290',
      image: '/images/m14.webp',
      color: 'Orange',
      fabric: 'LAWN',
      description: 'Beautiful lawn kurta with embroidered details. Perfect for festive occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 15,
      title: 'RTW | SHIRT',
      category: 'COTTON | PRINTED',
      sku: 'MS89-9-2P15-MS89-9-2P15-M',
      price: 'PKR 2,390',
      image: '/images/m15.webp',
      color: 'Yellow',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt with printed design. Perfect for casual outings.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 16,
      title: 'RTW | SHERWANI',
      category: 'SILK | EMBROIDERED',
      sku: 'MS89-9-2P16-MS89-9-2P16-M',
      price: 'PKR 11,990',
      image: '/images/m16.webp',
      color: 'Burgundy',
      fabric: 'SILK',
      description: 'Exquisite silk sherwani with intricate embroidery. Perfect for weddings.',
      careInstructions: ['Dry clean only', 'Do not use bleach', 'Store carefully']
    },
    {
      id: 17,
      title: 'RTW | SHIRT & CULOTTE',
      category: 'LAWN | PRINTED',
      sku: 'MS89-9-2P17-MS89-9-2P17-M',
      price: 'PKR 3,290',
      image: '/images/m17.webp',
      color: 'Pink',
      fabric: 'LAWN',
      description: 'Stylish lawn shirt and culotte set with printed design. Great for casual occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 18,
      title: 'RTW | KURTA & TROUSER',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'MS89-9-2P18-MS89-9-2P18-M',
      price: 'PKR 6,890',
      image: '/images/m18.webp',
      color: 'Emerald',
      fabric: 'CAMBRIC',
      description: 'Elegant cambric kurta and trouser set with embroidery details. Perfect for special events.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 19,
      title: 'RTW | SHIRT & TROUSER',
      category: 'COTTON | PRINTED',
      sku: 'MS89-9-2P19-MS89-9-2P19-M',
      price: 'PKR 2,790',
      image: '/images/m19.webp',
      color: 'Mint',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt and trouser set with printed pattern. Ideal for casual wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 20,
      title: 'RTW | KURTA',
      category: 'LAWN | EMBROIDERED',
      sku: 'MS89-9-2P20-MS89-9-2P20-M',
      price: 'PKR 4,590',
      image: '/images/m20.webp',
      color: 'Rose',
      fabric: 'LAWN',
      description: 'Beautiful lawn kurta with embroidered details. Perfect for cultural events.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/men')} className="back-button">
          Back to Men's Collection
        </button>
      </div>
    );
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

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
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MenProductDetail;
