import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

function Products() {
  // Mock product data
  const products = [
    { id: 101, name: 'Laptop Pro', category: 'Electronics', price: '$1299' },
    { id: 102, name: 'Wireless Mouse', category: 'Accessories', price: '$29' },
    { id: 103, name: 'Mechanical Keyboard', category: 'Accessories', price: '$149' },
    { id: 104, name: 'Monitor 4K', category: 'Electronics', price: '$599' },
    { id: 105, name: 'USB-C Hub', category: 'Accessories', price: '$79' },
    { id: 106, name: 'Desk Lamp', category: 'Office', price: '$45' },
  ];

  return (
    <div className="page-container">
      <h1>🛍️ Products Catalog</h1>
      <p className="intro-text">
        Browse our products. Click on any product to see its details with a dynamic route!
      </p>

      <div className="product-grid">
        {products.map(product => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            className="product-card"
          >
            <div className="product-icon">📦</div>
            <h3>{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">{product.price}</p>
            <span className="view-details">View Details →</span>
          </Link>
        ))}
      </div>

      <div className="info-box" style={{ marginTop: '2rem' }}>
        <h3>💡 Multiple Dynamic Routes:</h3>
        <p>
          This app demonstrates multiple dynamic routes:
        </p>
        <ul className="feature-list">
          <li><code>/user/:id</code> - For user profiles (IDs: 1-5)</li>
          <li><code>/product/:id</code> - For product details (IDs: 101-106)</li>
        </ul>
        <p>
          Both use the same <code>useParams()</code> hook pattern, but they're completely independent routes!
        </p>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

export default Products;

