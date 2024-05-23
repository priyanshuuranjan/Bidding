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

        // Generate random delivery date within 5 to 8 days
        const updatedDetails = details.map((payment) => ({
          ...payment,
          deliveryDate: generateDeliveryDate(),
        }));

        setPaymentDetails(updatedDetails);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };

    if (currentUser) {
      fetchPaymentDetails();
    }
  }, [currentUser]);

  const generateDeliveryDate = () => {
    const minDays = 5;
    const maxDays = 12;
    const deliveryDays =
      Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
    return deliveryDate.toDateString();
  };

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
          <p>Expected Delivery Date: {payment.deliveryDate}</p>{" "}
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
