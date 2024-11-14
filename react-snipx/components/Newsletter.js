import React from 'react';
import styles from './styles.module.css';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest news and features of SnipX by subscribing to our newsletter.</p>
        <form id="newsletterForm" className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
