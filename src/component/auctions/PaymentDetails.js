import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { firestoreApp } from "../../config/firebase";
import "./Payment.css";

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
    <div className="payment-container">
      <h2>Payment Details</h2>
      {paymentDetails.map((payment) => (
        <div key={payment.id} className="payment-item">
          <h3>Payment ID: {payment.id}</h3>
          <p>Name: {payment.name}</p>
          <p>Address: {payment.address}</p>
          <p>Mobile: {payment.mobile}</p>
          <p>Payment Method: {payment.paymentMethod}</p>
          <div className="item-details">
            <div>
              <p>Item Name: {payment.itemName}</p>
              <p>Item Description: {payment.itemDesc}</p>
              <p className="item-price">Item Price: ₹{payment.itemPrice}</p>
            </div>
            <div className="item-img">
              <img src={payment.itemImgUrl} alt="Auction Image" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentDetails;
