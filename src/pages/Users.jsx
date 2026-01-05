import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

function Users() {
  // Mock data - in a real app, this might come from an API
  const users = [
    { id: 1, name: 'Alice Johnson', role: 'Frontend Developer' },
    { id: 2, name: 'Bob Smith', role: 'Backend Developer' },
    { id: 3, name: 'Charlie Brown', role: 'Full Stack Developer' },
    { id: 4, name: 'Diana Prince', role: 'UI/UX Designer' },
    { id: 5, name: 'Ethan Hunt', role: 'DevOps Engineer' },
  ];

  return (
    <div className="page-container">
      <h1>Users List</h1>
      <p className="intro-text">
        Click on any user to view their profile. Notice how the URL changes to include the user ID!
      </p>

      <div className="card-grid">
        {users.map(user => (
          <Link 
            to={`/user/${user.id}`} 
            key={user.id} 
            className="user-card"
          >
            <div className="user-avatar">{user.name.charAt(0)}</div>
            <h3>{user.name}</h3>
            <p className="user-role">{user.role}</p>
            <span className="view-profile">View Profile →</span>
          </Link>
        ))}
      </div>

      <div className="info-box" style={{ marginTop: '2rem' }}>
        <h3>💡 Note about Dynamic Routes:</h3>
        <p>
          Each user card links to <code>/user/:id</code> where <code>:id</code> is a URL parameter. 
          The UserProfile component can access this ID using the <code>useParams()</code> hook.
        </p>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

export default Users;

