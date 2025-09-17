import React from 'react';
import './CategorySection.css';

const CategorySection = ({ category }) => {

  const getCategoryData = () => {
    const data = {
      men: {
        title: 'MEN\'S COLLECTION',
        subtitle: 'Elegant & Modern',
        image: '/images/men.png', // You can add specific images later
        description: 'Discover our premium men\'s collection featuring contemporary designs and timeless elegance.'
      },
      women: {
        title: 'WOMEN\'S COLLECTION',
        subtitle: 'Graceful & Sophisticated',
        image: '/images/women.png', // You can add specific images later
        description: 'Explore our exquisite women\'s collection with intricate designs and luxurious fabrics.'
      },
      kids: {
        title: 'KIDS\' COLLECTION',
        subtitle: 'Playful & Comfortable',
        image: '/images/kid.png', // You can add specific images later
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
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="category-overlay">
          <div className="category-text">
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
