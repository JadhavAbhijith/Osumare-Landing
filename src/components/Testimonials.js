import React from 'react';
import styles from '../styles/Testimonials.module.css';
import customerTest1 from '../assets/images/Customer Test.png';
import customerTest2 from '../assets/images/Customer Test2.png';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
       
        <div className={styles.testimonialHeader}>
          <h2>Customer Testimonials</h2>
          <p>This tool has transformed my productivity and organization!</p>
        </div>

        <div className={styles.testimonialImages}>
          <img
            src={customerTest1}
            alt="Customer Testimonial: Using this website has made my tasks so much easier!"
            className={styles.testimonialImage}
          />
          <img
            src={customerTest2}
            alt="Customer Testimonial: Start Organizing Your Life Today, with phone showing app"
            className={styles.testimonialImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;