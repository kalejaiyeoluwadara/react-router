import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './pages.css';

function NotFound() {
  const location = useLocation();

  return (
    <div className="page-container">
      <div className="not-found-container">
        <div className="not-found-icon">🔍</div>
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-text">
          Oops! The page <code>{location.pathname}</code> doesn't exist.
        </p>
        
        <div className="info-box">
          <h3>This is a catch-all route!</h3>
          <p>
            In the route configuration, this page is set up using:
          </p>
          <pre>
{`<Route path="*" element={<NotFound />} />`}
          </pre>
          <p>
            The <code>*</code> wildcard matches any path that hasn't been matched by other routes. 
            This is useful for handling 404 errors.
          </p>
        </div>

        <div className="button-group">
          <Link to="/" className="nav-button">
            🏠 Go Home
          </Link>
          <Link to="/users" className="nav-button secondary">
            👥 View Users
          </Link>
          <Link to="/products" className="nav-button secondary">
            🛍️ View Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

