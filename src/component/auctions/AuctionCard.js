import React, { useContext, useState, useEffect } from "react";
import Countdown from "react-countdown";
import { AuthContext } from "../../context/AuthContext";
import { firestoreApp } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./AuctionCard.css";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
  props,
  handleBuyNow,
}) => {
  if (completed) {
    // If the auction is completed, render the same card but with different content
    const currentUserIsWinner =
      props.owner &&
      props.owner.email &&
      props.item.curWinner &&
      props.owner.email === props.item.curWinner;

    return (
      <div className="card-container">
        <div className="card-image">
          <div
            style={{
              height: "300px",
              backgroundImage: `url(${props.item.imgUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div className="card-body">
            <p className="card-title">{props.item.title}</p>
            <div className="card-details">
              <p className="card-desc">{props.item.desc}</p>
              <p className="card-user">{props.item.email}</p>
            </div>
            <div className="bid-section">
              <p className="winner">Auction Ended</p>
              {currentUserIsWinner && (
                <div
                  className="btn btn-outline-secondary"
                  onClick={() => handleBuyNow()}
                >
                  Buy Now
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If the auction is still active, render the regular card content
  return (
    <div className="card-container">
      <div className="card-image">
        <div
          style={{
            height: "300px",
            backgroundImage: `url(${props.item.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="card-body">
          <p className="card-title">{props.item.title}</p>
          <div className="card-time">
            <h5>
              {days * 24 + hours} hr: {minutes} min: {seconds} sec
            </h5>
          </div>
          <div className="card-details">
            <p className="card-desc">{props.item.desc}</p>
            <p className="card-user">{props.item.email}</p>
          </div>
          <div className="bid-section">
            <div>
              {!props.owner ? (
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : props.owner.email === props.item.email ? (
                <div
                  onClick={() => props.endAuction(props.item.id)}
                  className="btn btn-outline-secondary"
                >
                  Cancel Auction
                </div>
              ) : props.owner.email === props.item.curWinner ? (
                <p className="winner">Current Bid:{props.owner.email} </p>
              ) : (
                <div
                  onClick={() =>
                    props.bidAuction(props.item.id, props.item.curPrice)
                  }
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              )}
            </div>
            <p className="price">₹{props.item.curPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuctionCard = ({ item }) => {
  let expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);
  const [showBuyNowPopup, setShowBuyNowPopup] = useState(false);
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    address: "",
    mobile: "",
    paymentMethod: "cash", // Default payment method
  });

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store payment details in Firestore
      await firestoreApp.collection("paymentdetails").add({
        userId: currentUser.uid,
        auctionId: item.id,
        name: paymentDetails.name,
        address: paymentDetails.address,
        mobile: paymentDetails.mobile,
        paymentMethod: paymentDetails.paymentMethod,
        timestamp: new Date(),
      });

      // Close the popup after submission
      setShowBuyNowPopup(false);

      // Clear payment details state
      setPaymentDetails({
        name: "",
        address: "",
        mobile: "",
        paymentMethod: "cash",
      });

      // Optionally, you can add logic here to navigate to the payment confirmation page or any other page.
      navigate("/PaymentDetails");
    } catch (error) {
      console.error("Error submitting payment details:", error);
    }
  };

  const handleBuyNow = () => {
    setShowBuyNowPopup(true);
  };

  const handleClosePopup = () => {
    setShowBuyNowPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showBuyNowPopup &&
        !event.target.closest(".form-container") &&
        !event.target.closest(".btn")
      ) {
        setShowBuyNowPopup(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [showBuyNowPopup]);

  return (
    <>
      <Countdown
        owner={currentUser}
        date={expiredDate}
        bidAuction={bidAuction}
        endAuction={endAuction}
        item={item}
        renderer={(props) => renderer({ ...props, handleBuyNow })}
        intervalDelay={0}
      />
      <div className={`form-overlay ${showBuyNowPopup ? "show" : ""}`}>
        {showBuyNowPopup && (
          <div className="form-overlay" onClick={handleClosePopup}></div>
        )}
      </div>
      {showBuyNowPopup && (
        <div className="form-container show">
          <form className="auction" onSubmit={handleOrderSubmit}>
            {/* Payment details form */}
            <div className="heading">
              <div className="text">Payment Details</div>
              <div className="under"></div>
            </div>
            <div className="box">
              <div className="input">
                <img src="/assets/person.png" alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={paymentDetails.name}
                  onChange={handlePaymentDetailsChange}
                />
              </div>
              <div className="input">
                <img src="/assets/address.png" alt="" />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  name="address"
                  value={paymentDetails.address}
                  onChange={handlePaymentDetailsChange}
                />
              </div>
              <div className="input">
                <img src="/assets/mobile.png" alt="" />
                <input
                  type="text"
                  placeholder="Mobile No"
                  required
                  name="mobile"
                  value={paymentDetails.mobile}
                  onChange={handlePaymentDetailsChange}
                />
              </div>
              <div className="input">
                <img src="/assets/payment.png" alt="" />
                <select
                  name="paymentMethod"
                  id="paymentMethod"
                  required
                  value={paymentDetails.paymentMethod}
                  onChange={handlePaymentDetailsChange}
                >
                  <option value="cash">Cash</option>
                  <option value="online">Online</option>
                </select>
              </div>
            </div>
            <div className="submit-btn-container">
              <button type="submit" className="submit-btn">
                Order
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AuctionCard;
