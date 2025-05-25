import React from 'react';
import styles from '../styles/ThankYouPopup.module.css';

const ThankYouPopup = ({ onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close thank you message">X</button>
        <h2>Thank you for connecting with us.</h2> 
        <p>Our team will contacting with you soon</p> 
        <button className={styles.doneButton} onClick={onClose}>Done</button> 
      </div>
    </div>
  );
};

export default ThankYouPopup;