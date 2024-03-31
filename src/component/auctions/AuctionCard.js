import React, { useContext } from 'react';
import Countdown from 'react-countdown';
import { AuthContext } from '../../context/AuthContext';

const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return null;
  }

  const { item, owner, bidAuction, endAuction } = props;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div
          style={{
            height: '320px',
            backgroundImage: `url(${item.imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="w-100"
        />

        <div className="card-body">
          <p className="lead display-6">{item.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h5>
              {days * 24 + hours} hr: {minutes} min: {seconds} sec
            </h5>
          </div>
          <p className="card-text">{item.desc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {!owner ? (
                <div
                  onClick={() => bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : owner.email === item.email ? (
                <div
                  onClick={() => endAuction(item.id)}
                  className="btn btn-outline-secondary"
                >
                  Cancel Auction
                </div>
              ) : owner.email === item.curWinner ? (
                <p className="display-6">Winner</p>
              ) : (
                <div
                  onClick={() => bidAuction(item.id, item.curPrice)}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              )}
            </div>
            <p className="display-6">${item.curPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuctionCard = ({ item }) => {
  let expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);

  return (
    <Countdown
      date={expiredDate}
      renderer={(props) => renderer({ ...props, item, owner: currentUser, bidAuction, endAuction })}
    />
  );
};
