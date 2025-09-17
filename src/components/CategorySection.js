import React from 'react';
import './CategorySection.css';

const CategorySection = ({ category }) => {

  const getCategoryData = () => {
    const data = {
      men: {
        title: 'MEN\'S COLLECTION',
        subtitle: 'Elegant & Modern',
        image: '/images/men.webp', // You can add specific images later
        description: 'Discover our premium men\'s collection featuring contemporary designs and timeless elegance.'
      },
      women: {
        title: 'WOMEN\'S COLLECTION',
        subtitle: 'Graceful & Sophisticated',
        image: '/images/women.jpeg', // You can add specific images later
        description: 'Explore our exquisite women\'s collection with intricate designs and luxurious fabrics.'
      },
      kids: {
        title: 'KIDS\' COLLECTION',
        subtitle: 'Playful & Comfortable',
        image: '/images/kids.jpg', // You can add specific images later
        description: 'Adorable and comfortable clothing for your little ones with vibrant colors and soft materials.'
      }
    };
    return data[category.toLowerCase()] || data.men;
  };

  const categoryData = getCategoryData();

  return (
    <section 
      id={category.toLowerCase()} 
      className="category-section"
    >
      <div 
        className="category-background"
        style={{
          backgroundImage: `url('${categoryData.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="category-overlay">
          <div className="category-text">
            <h2 className="category-title">{categoryData.title}</h2>
            <h3 className="category-subtitle">{categoryData.subtitle}</h3>
            <p className="category-description">{categoryData.description}</p>
            <button className="category-btn">
              EXPLORE {category.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
