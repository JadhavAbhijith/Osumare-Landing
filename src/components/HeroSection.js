import React from 'react';
import styles from '../styles/HeroSection.module.css';
import secondaryHeroImage from '../assets/images/Header.png';
import logoStripImage from '../assets/images/Logo Strip.png';

const HeroSection = ({ onGetStartedClick }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1><center>Simplify Your Life with Our</center></h1> 
          <h1><center>Todo App</center></h1>
          <p><center>
            Stay organized and boost your productivity with our intuitive todo website.
            Experience a modern approach to task management that fits your lifestyle.
            </center>
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.getStartedBtn} onClick={onGetStartedClick}>
              Get started
            </button>
            <button className={styles.learnMoreBtn}>Learn more</button> 
          </div>
        </div>
        
      </div>

      <div className={styles.secondaryImageSection}> 
        <div className={styles.container}> 
          <img
            src={secondaryHeroImage}
            alt="Your Tasks, Our Tools"
            className={styles.secondaryHeroImage}
          />
          <img
            src={logoStripImage}
            alt="Company logos Google, Facebook, YouTube, Pinterest, Twitch"
            className={styles.logoStripImage}
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;