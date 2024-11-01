import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
 
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };
 
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} setToken={setToken} />} />
        <Route path="/signup" element={<Registration />} /> 
        <Route path="/dashboard" element={token ? <Dashboard logout={logout} /> : <Login />} />
      </Routes>
    </Router>
  );
}
 
export default App;
 