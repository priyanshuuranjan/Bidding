import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Importing CSS file

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/room/${input}`);
  };

  return (
    <div className="zoom">
      <div className="input-zoom margin-top">
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
          required
        />
        <button className="button" onClick={submitHandler}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Home;
