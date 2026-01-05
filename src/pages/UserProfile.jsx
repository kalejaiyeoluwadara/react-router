import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './pages.css';

function UserProfile() {
  // useParams hook extracts the parameters from the URL
  const { id } = useParams();
  
  // useNavigate hook allows programmatic navigation
  const navigate = useNavigate();

  // Mock data - in a real app, you'd fetch this based on the id
  const usersData = {
    1: { name: 'Alice Johnson', role: 'Frontend Developer', email: 'alice@example.com', bio: 'Passionate about creating beautiful user interfaces with React.' },
    2: { name: 'Bob Smith', role: 'Backend Developer', email: 'bob@example.com', bio: 'Loves working with Node.js and databases.' },
    3: { name: 'Charlie Brown', role: 'Full Stack Developer', email: 'charlie@example.com', bio: 'Jack of all trades, master of some.' },
    4: { name: 'Diana Prince', role: 'UI/UX Designer', email: 'diana@example.com', bio: 'Creating delightful user experiences.' },
    5: { name: 'Ethan Hunt', role: 'DevOps Engineer', email: 'ethan@example.com', bio: 'Keeping systems running smoothly 24/7.' },
  };

  const user = usersData[id];

  // If user doesn't exist, show a message
  if (!user) {
    return (
      <div className="page-container">
        <div className="error-box">
          <h1>❌ User Not Found</h1>
          <p>No user found with ID: {id}</p>
          <Link to="/users" className="nav-button">Back to Users List</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="profile-header">
        <div className="profile-avatar-large">{user.name.charAt(0)}</div>
        <h1>{user.name}</h1>
        <p className="profile-role">{user.role}</p>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="detail-item">
          <strong>User ID:</strong> {id}
        </div>
        <div className="detail-item">
          <strong>Bio:</strong> {user.bio}
        </div>
      </div>

      <div className="info-box">
        <h3>🔍 How This Works:</h3>
        <p>This component uses the <code>useParams()</code> hook to get the user ID from the URL:</p>
        <pre>
{`const { id } = useParams();
// URL: /user/1 → id = "1"
// URL: /user/5 → id = "5"`}
        </pre>
      </div>

      <div className="button-group">
        <button 
          onClick={() => navigate('/users')} 
          className="nav-button"
        >
          ← Back to Users (useNavigate)
        </button>
        <Link to="/users" className="nav-button">
          ← Back to Users (Link)
        </Link>
      </div>

      <div className="info-box">
        <p>
          <strong>Note:</strong> The two "Back" buttons above do the same thing, but one uses 
          the <code>useNavigate()</code> hook (programmatic) and the other uses a <code>Link</code> component (declarative).
        </p>
      </div>
    </div>
  );
}

export default UserProfile;

