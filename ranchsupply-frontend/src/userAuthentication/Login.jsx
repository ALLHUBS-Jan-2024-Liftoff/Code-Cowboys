import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserProvider";
import { doLogin } from "../services/UserService";

function Login({ }) {
  const { setIsLogin, setUserData } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await doLogin({ username, password });
      console.log("Login response:", response);
      if (response.success) {
        setIsLogin(true);
        setUserData(response.user);
        setAuthenticated(true);
       // navigate("/");
        setMessage("Login successful!");
      } else {
        setMessage(response.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(error.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;