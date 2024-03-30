import React, { useContext, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import "./LoginSignup.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate(); // React Router v6

  const { register } = useContext(AuthContext);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(emailRef.current.value, passwordRef.current.value);
      navigate("/bids");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="auth" onSubmit={submitForm}>
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="inputs">
        <div className="input">
          <img src="/assets/person.png" alt="" />
          <input type="text" placeholder="Name" required ref={nameRef} />
        </div>

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
        <button type="submit" className="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Register;
