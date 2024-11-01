import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
 
function Dashboard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const navigate = useNavigate();
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };
 
  if (!isLoggedIn) {
    return <p>Redirecting to login...</p>;
  }
 
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
 
      <h3>Submit your details</h3>
      <button onClick={handleLogout} className="logout-button">Logout</button>
     
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
 
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
 
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          ></textarea>
        </div>
 
        <button type="submit" className="submit-button">Submit</button>
      </form>
     
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}
 
export default Dashboard;
 