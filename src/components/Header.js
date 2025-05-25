import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/Logo Todo.png';


const Header = ({ onSignUpClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Do List Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink}>About Us</a>
            </li>
            <li className={styles.navItem}>
              <a href="#features" className={styles.navLink}>Features</a>
            </li>
            <li className={styles.navItem}>
              <a href="#more-option" className={styles.navLink}>More Option</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.authButtons}>
          <button className={`${styles.button} ${styles.loginButton}`}>Log In</button>
          
          <button
            className={`${styles.button} ${styles.signupButton}`}
            onClick={onSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;