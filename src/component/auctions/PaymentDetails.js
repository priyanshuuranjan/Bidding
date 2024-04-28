import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { firestoreApp } from "../../config/firebase";

const PaymentDetails = () => {
  const { currentUser } = useContext(AuthContext);
  const [paymentDetails, setPaymentDetails] = useState([]);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const snapshot = await firestoreApp
          .collection("paymentdetails")
          .where("userId", "==", currentUser.uid)
          .get();

        const details = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPaymentDetails(details);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };

    if (currentUser) {
      fetchPaymentDetails();
    }
  }, [currentUser]);

  return (
    <div>
      <h2>Payment Details</h2>
      {paymentDetails.map((payment) => (
        <div key={payment.id}>
          <p>Name: {payment.name}</p>
          <p>Address: {payment.address}</p>
          <p>Mobile: {payment.mobile}</p>
          <p>Payment Method: {payment.paymentMethod}</p>
          {/* You can display auction details here using the auctionId */}
        </div>
      ))}
    </div>
  );
};

export default PaymentDetails;
