import React from 'react';
import styles from '../styles/Features.module.css';


import featureCard1 from '../assets/images/Group 23.png';
import featureCard2 from '../assets/images/Group 24.png';
import featureCard3 from '../assets/images/Group 25.png';
import featureCard4 from '../assets/images/Group 26.png';

const Features = () => {
  const featuresData = [
    {
      id: 1,
      image: featureCard1, 
      altText: 'User-Friendly Interface with number 01', 
    },
    {
      id: 2,
      image: featureCard2,
      altText: 'Collaborate & Share Effortlessly with number 02',
    },
    {
      id: 3,
      image: featureCard3,
      altText: 'Effortless Collaboration with number 03',
    },
    {
      id: 4,
      image: featureCard4,
      altText: 'Seamless Access with number 04',
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Transform Your Productivity with Our Innovative To-Do List Features</h2>
        <div className={styles.featuresGrid}>
          {featuresData.map(feature => (
            <div key={feature.id} className={styles.featureItem}>
              
              <img
                src={feature.image}
                alt={feature.altText}
                className={styles.featureCardImage}
              />
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;