import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

function Home() {
  return (
    <div className="page-container">
      <h1>🏠 Welcome to React Router Tutorial!</h1>
      <p className="intro-text">
        This is a simple demonstration of React Router. React Router enables "client-side routing" 
        which allows your app to update the URL from a link click without making another request for another document from the server.
      </p>
      
      <div className="info-box">
        <h2>What You'll Learn Here:</h2>
        <ul className="feature-list">
          <li>✅ Basic routing between pages</li>
          <li>✅ Navigation with Links</li>
          <li>✅ Dynamic routes with URL parameters (like /user/123)</li>
          <li>✅ How to access route parameters in components</li>
          <li>✅ 404 Not Found pages</li>
        </ul>
      </div>

      <div className="cta-section">
        <h2>Quick Links:</h2>
        <div className="button-grid">
          <Link to="/about" className="nav-button">About Page</Link>
          <Link to="/users" className="nav-button">View Users</Link>
          <Link to="/products" className="nav-button">View Products</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

