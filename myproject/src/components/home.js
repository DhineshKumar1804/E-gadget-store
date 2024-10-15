import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import img from './img1.webp';
import img2 from './mac.webp';
import img3 from './other.jpg';

function Home() {
  // Function to handle feedback form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    alert("Thank you for your feedback!"); // Display alert message
  };

  return (
    <main className='back'>
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h2>Welcome to E-Gadgets Pro</h2>
            <p>Your one-stop shop for all the latest gadgets and electronics.</p>
            <button><Link to='/Login'>Explore Now!!</Link></button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src={img} alt="Product 1" />
              <h3>Mobile Phones</h3>
              <p>Get all the latest Mobile Phones.</p>
              <button><Link to='/Login'>Buy now!</Link></button>
            </div>
            <div className="product-item">
              <img src={img2} alt="Product 2" />
              <h3>Laptops</h3>
              <p>Latest laptops at affordable price.</p>
              <button><Link to='/Login'>Buy now!</Link></button>
            </div>
            <div className="product-item">
              <img src={img3} alt="Product 3" />
              <h3>Others</h3>
              <p>All the electronics that you need.</p>
              <button><Link to='/Login'>Buy now!</Link></button>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-item">
            <p>"E-Gadgets Pro offers the best gadgets at amazing prices. Highly recommended!"</p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial-item">
            <p>"Fantastic service and a great selection of products. I'll definitely be back!"</p>
            <p>- John Smith</p>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="feedback">
          <h2>Give Us Your Feedback</h2>
          <p>We value your feedback! Let us know how we can improve our services or products.</p>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Enter your email" required />
            <textarea placeholder="Your feedback" rows="5" required></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </section>
      </div>
      <footer>
        <p>&copy; 2024 E-Gadgets Pro. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

export default Home;
