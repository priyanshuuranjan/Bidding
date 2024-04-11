import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useFirestore from "../../hooks/useFirestore";
import AddAuction from "./AddAuction";
import AuctionCard from "./AuctionCard";
import ProgressBar from "./ProgressBar";
import "./Body.css";

const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { docs } = useFirestore("auctions");

  return (
    <>
      <div className="container">
        {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

        {globalMsg && <div className="alert info">{globalMsg}</div>}

        {currentUser && <AddAuction setAuction={setAuction} />}

        {docs && (
          <div className="auction-card-container">
            {docs.map((doc) => {
              return <AuctionCard item={doc} key={doc.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default AuctionBody;
