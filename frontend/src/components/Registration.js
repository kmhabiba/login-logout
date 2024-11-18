import React, { useState } from "react";
import axios from "axios";
import "./Dashboard";
 
const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
 
    try {
      const response = await axios.post("http://localhost:5001/api/auth/signup", {
        username,
        email,
        password,
      });
      console.log(response.data);
      setMessage("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.error || "Error occurred");
      setMessage(error.response?.data?.error || "Registration failed.");
    }
  };
 
  return (
<div className="auth-container">
<h2>Sign Up</h2>
<form onSubmit={handleSubmit} className="auth-form">
<input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="auth-input"
          required
        />
<input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="auth-input"
          required
        />
<input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="auth-input"
          required
        />
<button type="submit" className="auth-button">
          Sign Up
</button>
</form>
      {message && (
<p className="auth-error" style={{ color: message.includes("successful") ? "green" : "red" }}>
          {message}
</p>
      )}
</div>
  );
};
 
export default Registration;