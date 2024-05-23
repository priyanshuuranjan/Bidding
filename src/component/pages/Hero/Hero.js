// Hero.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate("/bids"); 
  };

  return (
    <div className="hero">
      <div className="left">
        <p className="welcome">Welcome to</p>
        <h1 className="title">Bidster</h1>
        <h3 className="subtitle">
          Discover the Unexplored: Where Unused Meets Untapped.
        </h3>
        <p className="description">
          Your premier online bidding platform. Bid directly on diverse
          products, from electronics to fashion, securely and transparently.
          Enjoy fair bidding, seller protection, and a user-friendly interface.
          Join our community today to experience the excitement of auctions
          without intermediaries!
        </p>
        <button className="join-button" onClick={handleJoinNow}>
          Join Now!
        </button>
      </div>
      <div className="right">
        <img
          src="https://media1.giphy.com/media/l41YAbDsTJXKANjmE/200.webp?cid=790b7611mu0r96agqasbcf6no0ntormpalpl4xeay85ya93u&ep=v1_gifs_search&rid=200.webp&ct=g"
          alt="Auction Image"
          className="auction-image"
        />
      </div>
    </div>
  );
};

export default Hero;
