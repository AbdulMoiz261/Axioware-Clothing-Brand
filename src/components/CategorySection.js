import React from 'react';
import './CategorySection.css';
import ContactUs from './ContactUs';
import Footer from './Footer';

const CategorySection = ({ category }) => {

  const getCategoryData = () => {
    const data = {
      men: {
        title: 'MEN\'S COLLECTION',
        subtitle: 'Elegant & Modern',
        image: '/images/men.png',
        tabletImage: '/images/men.png',
        mobileImage: '/images/men.png',
    description: 'Discover our premium men\'s collection featuring contemporary designs and timeless elegance.'
      },
      women: {
        title: 'WOMEN\'S COLLECTION',
        subtitle: 'Graceful & Sophisticated',
        image: '/images/women.png',
        tabletImage: '/images/1.webp',
        mobileImage: '/images/1.webp',
        description: 'Explore our exquisite women\'s collection with intricate designs and luxurious fabrics.'
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
      <div className="category-background">
        {/* Desktop Image */}
        <div 
          className="category-bg-desktop"
          style={{
            backgroundImage: `url('${categoryData.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll'
          }}
        ></div>
        
        {/* Tablet Image */}
        <div 
          className="category-bg-tablet"
          style={{
            backgroundImage: `url('${categoryData.tabletImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll'
          }}
        ></div>
        
        {/* Mobile Image */}
        <div 
          className="category-bg-mobile"
          style={{
            backgroundImage: `url('${categoryData.mobileImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll'
          }}
        ></div>
        <div className="category-overlay">
          <div className="category-text">
            <button className="category-btn">
              EXPLORE {category.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </section>
  );
};

export default CategorySection;
