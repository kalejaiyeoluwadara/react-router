import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

function About() {
  return (
    <div className="page-container">
      <h1>About React Router</h1>
      
      <div className="info-box">
        <h2>What is React Router?</h2>
        <p>
          React Router is a standard library for routing in React. It enables the navigation among views 
          of various components in a React Application, allows changing the browser URL, and keeps the UI 
          in sync with the URL.
        </p>
      </div>

      <div className="info-box">
        <h2>Key Concepts:</h2>
        <ul className="feature-list">
          <li>
            <strong>BrowserRouter:</strong> The parent component that stores all of your other components.
            It uses the HTML5 history API to keep your UI in sync with the URL.
          </li>
          <li>
            <strong>Routes & Route:</strong> These components define the relationship between URL paths 
            and the components that should be rendered.
          </li>
          <li>
            <strong>Link:</strong> Used to create links in your application. It renders an anchor tag 
            that navigates without reloading the page.
          </li>
          <li>
            <strong>useParams:</strong> A hook that lets you access URL parameters in your component.
          </li>
          <li>
            <strong>useNavigate:</strong> A hook that lets you navigate programmatically.
          </li>
        </ul>
      </div>

      <div className="code-example">
        <h3>Example Route Definition:</h3>
        <pre>
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/user/:id" element={<UserProfile />} />
</Routes>`}
        </pre>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

export default About;

