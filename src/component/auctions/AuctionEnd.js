import React from "react";
import useFirestore from "../../hooks/useFirestore";
import AuctionCard from "./AuctionCard";
import "./AuctionEnd.css";

const AuctionEnd = () => {
  const { docs } = useFirestore("endauction");

  return (
    <div className="auction-end-container">
      <h2>Closed Auctions</h2>
      <div className="auction-end-card-container">
        {docs && docs.map((doc) => <AuctionCard item={doc} key={doc.id} />)}
      </div>
    </div>
  );
};

export default AuctionEnd;
