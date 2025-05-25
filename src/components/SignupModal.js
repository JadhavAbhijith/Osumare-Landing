import React, { useState } from 'react';
import styles from '../styles/SignupModal.module.css';

const SignupModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    language: '',
    email: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.firstName || !formData.lastName || !formData.email || !formData.agreeTerms) {
    alert('Please fill in all required fields and agree to the terms.');
    return;
  }

  const existingData = JSON.parse(localStorage.getItem('submissions')) || [];
  const newEntry = {
    ...formData,
    timestamp: new Date().toLocaleString(),
  };

  existingData.push(newEntry);
  localStorage.setItem('submissions', JSON.stringify(existingData));

  onSubmit(newEntry);
};


  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close signup form">X</button>
        <h2>Get Started Today!</h2> 
        <p>Fill in your details and take control of your tasks.</p> 

        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label> 
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name" 
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label> 
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name" 
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Gender</label> 
            <div className={styles.radioGroup}>
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male" 
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                /> Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female" 
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                /> Female
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="language">Language</label> 
            <div className={styles.radioGroup}>
              <label htmlFor="english">
                <input
                  type="radio"
                  id="english"
                  name="language"
                  value="English"
                  checked={formData.language === 'English'}
                  onChange={handleChange}
                /> English
              </label>
              <label htmlFor="hindi">
                <input
                  type="radio"
                  id="hindi"
                  name="language"
                  value="Hindi" 
                  checked={formData.language === 'Hindi'}
                  onChange={handleChange}
                /> Hindi
              </label>
              <label htmlFor="marathi">
                <input
                  type="radio"
                  id="marathi"
                  name="language"
                  value="Marathi" 
                  checked={formData.language === 'Marathi'}
                  onChange={handleChange}
                /> Marathi
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label> 
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.termsCheckbox}>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeTerms">I agree to the terms and conditions</label> 
          </div>

          <button type="submit" className={styles.submitButton}>Done</button> 
        </form>
      </div>
    </div>
  );
};

export default SignupModal;