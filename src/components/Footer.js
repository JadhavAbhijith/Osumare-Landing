import React from 'react';
import styles from '../styles/Footer.module.css';
import footerLogo from '../assets/images/Logo Todo.png'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerSection}>
          
          <div className={styles.footerLogoContainer}>
            <img src={footerLogo} alt="Do List Logo" className={styles.footerLogo} />
          </div>
          <p className={styles.newsletterText}>
            Subscribe to our newsletter for the latest features and updates
            delivered to you.
          </p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Your email here"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.joinButton}>Join</button>
          </div>
          <p className={styles.privacyConsent}>
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </p>
        </div>

        <div className={styles.footerSection}>
          
          <h3 className={styles.sectionTitle}>Useful Links</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#home" className={styles.footerLink}>Home Page</a></li>
            <li><a href="#about" className={styles.footerLink}>About Us</a></li>
            <li><a href="#contact" className={styles.footerLink}>Contact Us</a></li>
            <li><a href="#blog" className={styles.footerLink}>Blog Posts</a></li>
            <li><a href="#faqs" className={styles.footerLink}>FAQs</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          
          <h3 className={styles.sectionTitle}>Resources</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#help" className={styles.footerLink}>Help Center</a></li>
            <li><a href="#guide" className={styles.footerLink}>User Guide</a></li>
            <li><a href="#community" className={styles.footerLink}>Community Forum</a></li>
            <li><a href="#feedback" className={styles.footerLink}>Feedback</a></li>
            <li><a href="#support" className={styles.footerLink}>Support</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          
          <h3 className={styles.sectionTitle}>Connect With Us</h3>
          <ul className={styles.socialLinks}>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-facebook-f"></i> Facebook
            </a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-instagram"></i> Instagram
            </a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-x-twitter"></i> X (formerly Twitter)
            </a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-youtube"></i> YouTube
            </a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>© 2024 Osumare. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#privacy" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#terms" className={styles.bottomLink}>Terms of Service</a>
            <a href="#cookies" className={styles.bottomLink}>Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;