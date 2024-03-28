import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src="https://img.freepik.com/free-photo/person-with-court-hammer_1048-1720.jpg?t=st=1711614523~exp=1711618123~hmac=80f977d91ba26ec089f65e3d80af022185b2c5c5435010498d18aa5cc89d6515&w=996"
          alt="img"
          className="about-img"
        />
      </div>

      <div className="about-right">
        <h3>ABOUT BIDSTER</h3>
        <h2>Your Bids,Your Rules, Your Rewards💰</h2>
        <p>
          Welcome to Bidster, where bidding meets simplicity. At Bidster, we've
          revolutionized the bidding experience, making it easier than ever for
          you to bid on your favorite items. With our user-friendly platform,
          you can effortlessly bid on items by setting your desired time and
          price, all while uploading images to showcase your listings.
        </p>
        <p>
          Whether you're a seasoned bidder or new to the game, Bidster provides
          a seamless auction experience for everyone. Simply place your bid, sit
          back, and watch as the competition unfolds.
        </p>
        <p>
          And when the timer runs out, the highest bidder takes home the prize,
          with items swiftly delivered right to your doorstep. Join Bidster
          today and embark on a thrilling bidding adventure like never before!
        </p>
      </div>
    </div>
  );
}

export default About;
