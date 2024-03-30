import React, { useContext, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import "./LoginSignup.css";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [error, setError] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cmfPasswordRef = useRef();
  const navigate = useNavigate(); // React Router v6

  const { register, login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (action === "Sign Up") {
      const confirmPassword = cmfPasswordRef.current.value;

      if (password !== confirmPassword) {
        return setError("Passwords do not match");
      }

      try {
        await register(emailRef.current.value, passwordRef.current.value);
      } catch (error) {
        setError(error.message);
      }
    } else {
      try {
        await login(emailRef.current.value, passwordRef.current.value);
        // Login successful, redirect to the home page
        navigate("/");
      } catch (error) {
        setError("Invalid login");
      }
    }
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src="/assets/person.png" alt="" />
            <input type="text" placeholder="Name" required ref={nameRef} />
          </div>
        )}
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
        {action === "Sign Up" ? (
          <div className="input">
            <img src="/assets/password.png" alt="" />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              ref={cmfPasswordRef}
            />
          </div>
        ) : null}
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <button
          type="submit"
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </button>
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
