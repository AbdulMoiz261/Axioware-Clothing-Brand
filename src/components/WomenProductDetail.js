import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const WomenProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('6');
  const [quantity, setQuantity] = useState(1);

  // Women's product data (28 items)
  const products = [
    {
      id: 1,
      title: 'RTW | SHIRT & TROUSER',
      category: 'YARN DYED | PRINTED',
      sku: 'BS89-9-2P25-BS89-9-2P25-6',
      price: 'PKR 5,990',
      image: '/images/1.webp',
      color: 'Beige',
      fabric: 'YARN DYED',
      description: 'Beautiful yarn-dyed shirt and trouser set featuring subtle printed patterns. Made from premium quality fabric for comfort and style.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 2,
      title: 'RTW | SHIRT',
      category: 'LAWN | PRINTED',
      sku: 'BS89-9-2P26-BS89-9-2P26-6',
      price: 'PKR 1,990',
      image: '/images/2.webp',
      color: 'Blue',
      fabric: 'LAWN',
      description: 'Elegant lawn shirt with beautiful printed design. Perfect for casual and semi-formal occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 3,
      title: 'RTW | SHIRT, CULOTTE & DUPATTA',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'BS89-9-2P27-BS89-9-2P27-6',
      price: 'PKR 8,390',
      image: '/images/3.webp',
      color: 'Pink',
      fabric: 'CAMBRIC',
      description: 'Complete three-piece set with embroidered details. Includes shirt, culotte, and matching dupatta.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 4,
      title: 'RTW | SHIRT & CULOTTE',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'BS89-9-2P28-BS89-9-2P28-6',
      price: 'PKR 4,190',
      image: '/images/4.webp',
      color: 'Green',
      fabric: 'CAMBRIC',
      description: 'Stylish two-piece set with intricate embroidery work. Perfect for festive occasions.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 5,
      title: 'RTW | KURTA & PALAZZO',
      category: 'LAWN | EMBROIDERED',
      sku: 'BS89-9-2P29-BS89-9-2P29-6',
      price: 'PKR 6,590',
      image: '/images/5.webp',
      color: 'Purple',
      fabric: 'LAWN',
      description: 'Traditional kurta with modern palazzo pants. Features beautiful embroidery details.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 6,
      title: 'RTW | DRESS',
      category: 'COTTON | PRINTED',
      sku: 'BS89-9-2P30-BS89-9-2P30-6',
      price: 'PKR 3,290',
      image: '/images/6.webp',
      color: 'Red',
      fabric: 'COTTON',
      description: 'Comfortable cotton dress with printed design. Perfect for everyday wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 7,
      title: 'RTW | LEHENGA & CHOLI',
      category: 'SILK | EMBROIDERED',
      sku: 'BS89-9-2P31-BS89-9-2P31-6',
      price: 'PKR 15,990',
      image: '/images/7.webp',
      color: 'Gold',
      fabric: 'SILK',
      description: 'Luxurious silk lehenga with intricate embroidery. Perfect for weddings and special occasions.',
      careInstructions: ['Dry clean only', 'Do not use bleach', 'Store carefully']
    },
    {
      id: 8,
      title: 'RTW | SHIRT & TROUSER',
      category: 'LAWN | PRINTED',
      sku: 'BS89-9-2P32-BS89-9-2P32-6',
      price: 'PKR 4,590',
      image: '/images/8.webp',
      color: 'Yellow',
      fabric: 'LAWN',
      description: 'Comfortable lawn shirt and trouser set with printed pattern.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 9,
      title: 'RTW | KURTA & DUPATTA',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'BS89-9-2P33-BS89-9-2P33-6',
      price: 'PKR 7,290',
      image: '/images/9.jpg',
      color: 'Orange',
      fabric: 'CAMBRIC',
      description: 'Elegant kurta with matching dupatta. Features beautiful embroidery work.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 10,
      title: 'RTW | SHIRT & CULOTTE',
      category: 'COTTON | PRINTED',
      sku: 'BS89-9-2P34-BS89-9-2P34-6',
      price: 'PKR 3,890',
      image: '/images/10.webp',
      color: 'Brown',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt and culotte set with printed design.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 11,
      title: 'RTW | DRESS',
      category: 'LAWN | EMBROIDERED',
      sku: 'BS89-9-2P35-BS89-9-2P35-6',
      price: 'PKR 5,490',
      image: '/images/11.jpg',
      color: 'Maroon',
      fabric: 'LAWN',
      description: 'Beautiful lawn dress with embroidered details. Perfect for formal occasions.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 12,
      title: 'RTW | KURTA & PALAZZO',
      category: 'SILK | PRINTED',
      sku: 'BS89-9-2P36-BS89-9-2P36-6',
      price: 'PKR 9,990',
      image: '/images/12.jpg',
      color: 'Navy',
      fabric: 'SILK',
      description: 'Luxurious silk kurta and palazzo set with printed design.',
      careInstructions: ['Dry clean only', 'Do not use bleach', 'Store carefully']
    },
    {
      id: 13,
      title: 'RTW | SHIRT & TROUSER',
      category: 'CAMBRIC | PRINTED',
      sku: 'BS89-9-2P37-BS89-9-2P37-6',
      price: 'PKR 4,190',
      image: '/images/13.jpg',
      color: 'Gray',
      fabric: 'CAMBRIC',
      description: 'Stylish cambric shirt and trouser set with printed pattern.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 14,
      title: 'RTW | KURTA & DUPATTA',
      category: 'LAWN | EMBROIDERED',
      sku: 'BS89-9-2P38-BS89-9-2P38-6',
      price: 'PKR 6,890',
      image: '/images/14.webp',
      color: 'Teal',
      fabric: 'LAWN',
      description: 'Elegant lawn kurta with matching dupatta and embroidery work.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 15,
      title: 'RTW | DRESS',
      category: 'COTTON | PRINTED',
      sku: 'BS89-9-2P39-BS89-9-2P39-6',
      price: 'PKR 2,990',
      image: '/images/15.webp',
      color: 'Lavender',
      fabric: 'COTTON',
      description: 'Comfortable cotton dress with beautiful printed design.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 16,
      title: 'RTW | LEHENGA',
      category: 'SILK | EMBROIDERED',
      sku: 'BS89-9-2P40-BS89-9-2P40-6',
      price: 'PKR 12,990',
      image: '/images/16.webp',
      color: 'Silver',
      fabric: 'SILK',
      description: 'Stunning silk lehenga with intricate embroidery work.',
      careInstructions: ['Dry clean only', 'Do not use bleach', 'Store carefully']
    },
    {
      id: 17,
      title: 'RTW | SHIRT & CULOTTE',
      category: 'LAWN | PRINTED',
      sku: 'BS89-9-2P41-BS89-9-2P41-6',
      price: 'PKR 3,590',
      image: '/images/17.webp',
      color: 'Coral',
      fabric: 'LAWN',
      description: 'Beautiful lawn shirt and culotte set with printed design.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 18,
      title: 'RTW | KURTA & PALAZZO',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'BS89-9-2P42-BS89-9-2P42-6',
      price: 'PKR 7,890',
      image: '/images/18.jpg',
      color: 'Emerald',
      fabric: 'CAMBRIC',
      description: 'Stylish cambric kurta and palazzo set with embroidery details.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 19,
      title: 'RTW | SHIRT & TROUSER',
      category: 'COTTON | PRINTED',
      sku: 'BS89-9-2P43-BS89-9-2P43-6',
      price: 'PKR 3,290',
      image: '/images/19.webp',
      color: 'Mint',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt and trouser set with printed pattern.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 20,
      title: 'RTW | DRESS',
      category: 'LAWN | EMBROIDERED',
      sku: 'BS89-9-2P44-BS89-9-2P44-6',
      price: 'PKR 5,190',
      image: '/images/20.webp',
      color: 'Rose',
      fabric: 'LAWN',
      description: 'Elegant lawn dress with embroidered details and beautiful design.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 21,
      title: 'RTW | KURTA & DUPATTA',
      category: 'SILK | PRINTED',
      sku: 'BS89-9-2P45-BS89-9-2P45-6',
      price: 'PKR 8,990',
      image: '/images/21.webp',
      color: 'Burgundy',
      fabric: 'SILK',
      description: 'Luxurious silk kurta with matching dupatta and printed design.',
      careInstructions: ['Dry clean only', 'Do not use bleach', 'Store carefully']
    },
    {
      id: 22,
      title: 'RTW | SHIRT & CULOTTE',
      category: 'CAMBRIC | PRINTED',
      sku: 'BS89-9-2P46-BS89-9-2P46-6',
      price: 'PKR 4,590',
      image: '/images/22.webp',
      color: 'Turquoise',
      fabric: 'CAMBRIC',
      description: 'Stylish cambric shirt and culotte set with printed pattern.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 23,
      title: 'RTW | KURTA & PALAZZO',
      category: 'LAWN | EMBROIDERED',
      sku: 'BS89-9-2P47-BS89-9-2P47-6',
      price: 'PKR 6,290',
      image: '/images/23.jpg',
      color: 'Peach',
      fabric: 'LAWN',
      description: 'Beautiful lawn kurta and palazzo set with embroidery work.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 24,
      title: 'RTW | DRESS',
      category: 'COTTON | PRINTED',
      sku: 'BS89-9-2P48-BS89-9-2P48-6',
      price: 'PKR 2,790',
      image: '/images/24.jpg',
      color: 'Sage',
      fabric: 'COTTON',
      description: 'Comfortable cotton dress with printed design for everyday wear.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 25,
      title: 'RTW | LEHENGA & CHOLI',
      category: 'SILK | EMBROIDERED',
      sku: 'BS89-9-2P49-BS89-9-2P49-6',
      price: 'PKR 14,990',
      image: '/images/25.jpg',
      color: 'Ruby',
      fabric: 'SILK',
      description: 'Exquisite silk lehenga and choli set with intricate embroidery.',
      careInstructions: ['Dry clean only', 'Do not use bleach', 'Store carefully']
    },
    {
      id: 26,
      title: 'RTW | SHIRT & TROUSER',
      category: 'LAWN | PRINTED',
      sku: 'BS89-9-2P50-BS89-9-2P50-6',
      price: 'PKR 4,190',
      image: '/images/26.webp',
      color: 'Indigo',
      fabric: 'LAWN',
      description: 'Comfortable lawn shirt and trouser set with printed design.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    },
    {
      id: 27,
      title: 'RTW | KURTA & DUPATTA',
      category: 'CAMBRIC | EMBROIDERED',
      sku: 'BS89-9-2P51-BS89-9-2P51-6',
      price: 'PKR 7,590',
      image: '/images/27.jpeg',
      color: 'Plum',
      fabric: 'CAMBRIC',
      description: 'Elegant cambric kurta with matching dupatta and embroidery details.',
      careInstructions: ['Hand wash', 'Do not use bleach', 'Dry clean recommended']
    },
    {
      id: 28,
      title: 'RTW | SHIRT & CULOTTE',
      category: 'COTTON | PRINTED',
      sku: 'BS89-9-2P52-BS89-9-2P52-6',
      price: 'PKR 3,490',
      image: '/images/28.jpg',
      color: 'Cream',
      fabric: 'COTTON',
      description: 'Comfortable cotton shirt and culotte set with printed design.',
      careInstructions: ['Machine wash', 'Do not use bleach', 'Can be ironed']
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/women')} className="back-button">
          Back to Women's Collection
        </button>
      </div>
    );
  }

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

export default WomenProductDetail;
