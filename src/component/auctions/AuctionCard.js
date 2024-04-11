import React, { useContext } from "react";
import Countdown from "react-countdown";
import { AuthContext } from "../../context/AuthContext";
import "./AuctionCard.css";
const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return null;
  }

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
       <p className="card-desc">{props.item.desc} </p>
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
                <p className="winner">Winner</p>
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
            <p className="price">${props.item.curPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuctionCard = ({ item }) => {
  let expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);

  return (
    <Countdown
      owner={currentUser}
      date={expiredDate}
      bidAuction={bidAuction}
      endAuction={endAuction}
      item={item}
      renderer={renderer}
    />
  );
};
export default AuctionCard;
