// // firebaseUtils.js

// import { firestoreApp } from "../config/firebase";

// const checkPaymentRecordExistsForItem = async (itemId) => {
//   try {
//     const snapshot = await firestoreApp
//       .collection("paymentdetails")
//       .where("auctionId", "==", itemId)
//       .get();

//     return !snapshot.empty;
//   } catch (error) {
//     console.error("Error checking payment record:", error);
//     return false;
//   }
// };

// export default checkPaymentRecordExistsForItem;
