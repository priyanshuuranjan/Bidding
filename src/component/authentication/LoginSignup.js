import React, { useContext, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import "./LoginSignup.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate(); 

  const { login } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext); // Access currentUser from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      // Login successful, redirect to the home page
      navigate("/bids");
    } catch (error) {
      setError("Invalid login");
    }
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="inputs">
        <div className="input">
          <img src="/assets/email.png" alt="" />
          <input type="email" placeholder="Email ID" required ref={emailRef} />
        </div>
        <div className="input">
          <img src="/assets/password.png" alt="" />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
        </div>
      </div>

      <div className="submit-container">
        <button
          type="submit"
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginSignup;
