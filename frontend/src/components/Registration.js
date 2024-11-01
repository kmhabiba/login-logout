import React, { useState } from "react";
import axios from "axios";
 
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
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
 
export default Registration;