import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './pages.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product data
  const productsData = {
    101: { 
      name: 'Laptop Pro', 
      category: 'Electronics', 
      price: '$1299',
      description: 'High-performance laptop with 16GB RAM and 512GB SSD. Perfect for development and creative work.',
      features: ['16GB RAM', '512GB SSD', '15.6" Display', 'Intel i7 Processor']
    },
    102: { 
      name: 'Wireless Mouse', 
      category: 'Accessories', 
      price: '$29',
      description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
      features: ['Wireless', '6 Buttons', '2.4GHz Connection', '12-month battery']
    },
    103: { 
      name: 'Mechanical Keyboard', 
      category: 'Accessories', 
      price: '$149',
      description: 'Premium mechanical keyboard with RGB backlighting and custom switches.',
      features: ['RGB Lighting', 'Mechanical Switches', 'USB-C', 'Aluminum Frame']
    },
    104: { 
      name: 'Monitor 4K', 
      category: 'Electronics', 
      price: '$599',
      description: '27-inch 4K UHD monitor with HDR support and ultra-thin bezels.',
      features: ['4K Resolution', 'HDR10', '27 inch', '99% sRGB']
    },
    105: { 
      name: 'USB-C Hub', 
      category: 'Accessories', 
      price: '$79',
      description: 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.',
      features: ['7 Ports', 'USB-C', 'HDMI 4K', 'SD Card Reader']
    },
    106: { 
      name: 'Desk Lamp', 
      category: 'Office', 
      price: '$45',
      description: 'Adjustable LED desk lamp with multiple brightness levels and color temperatures.',
      features: ['LED', 'Adjustable', '3 Color Modes', 'Touch Control']
    },
  };

  const product = productsData[id];

  if (!product) {
    return (
      <div className="page-container">
        <div className="error-box">
          <h1>❌ Product Not Found</h1>
          <p>No product found with ID: {id}</p>
          <Link to="/products" className="nav-button">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="product-detail-header">
        <div className="product-icon-large">📦</div>
        <div>
          <h1>{product.name}</h1>
          <p className="product-category-badge">{product.category}</p>
        </div>
      </div>

      <div className="product-price-large">{product.price}</div>

      <div className="product-section">
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>

      <div className="product-section">
        <h2>Features</h2>
        <ul className="feature-list">
          {product.features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
      </div>

      <div className="product-section">
        <strong>Product ID:</strong> {id}
      </div>

      <div className="info-box">
        <h3>🔍 URL Parameter in Action:</h3>
        <p>
          The product ID <code>{id}</code> was extracted from the URL using:
        </p>
        <pre>
{`const { id } = useParams();
// Current URL: /product/${id}`}
        </pre>
      </div>

      <div className="button-group">
        <button 
          onClick={() => navigate('/products')} 
          className="nav-button"
        >
          ← Back to Products
        </button>
        <button 
          onClick={() => navigate('/')} 
          className="nav-button secondary"
        >
          🏠 Home
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

