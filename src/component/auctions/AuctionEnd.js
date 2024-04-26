// import React from "react";
// import useFirestore from "../../hooks/useFirestore";
// import AuctionCard from "./AuctionCard";
// import "./AuctionEnd.css";

// const AuctionEnd = () => {
//   const { docs } = useFirestore("endauction");

//   return (
//     <div className="auction-end-container">
//       <h2>Closed Auctions</h2>
//       <div className="auction-end-card-container">
//         {docs && docs.map((doc) => (
//           <div key={doc.id} className="closed-auction">
//             <AuctionCard item={doc} />
//             <p>Status: {doc.status}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default AuctionEnd;


import React from "react";
import useFirestore from "../../hooks/useFirestore";
import AuctionCard from "./AuctionCard";
import "./AuctionEnd.css";

const AuctionEnd = () => {
  const { docs } = useFirestore("endauction");

  const handleBuyNow = (auctionId) => {
    // Implement your buy now logic here
    console.log("Buy Now clicked for auction ID:", auctionId);
  };

  return (
    <div className="auction-end-container">
      <h2>Closed Auctions</h2>
      <div className="auction-end-card-container">
        {docs &&
          docs.map((doc) => (
            <AuctionCard
              item={doc}
              key={doc.id}
              // Pass the buyNow function and winner information to AuctionCard
              buyNow={handleBuyNow}
            />
          ))}
      </div>
    </div>
  );
};

export default AuctionEnd;

