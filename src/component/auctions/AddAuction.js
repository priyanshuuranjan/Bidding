import React, { useContext, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import { AuthContext } from "../../context/AuthContext";
import "./AddAuction.css";

const AddAuction = ({ setAuction }) => {
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const itemTitle = useRef();
  const itemDesc = useRef();
  const startPrice = useRef();
  const itemDuration = useRef();
  const itemImage = useRef();
  const { currentUser } = useContext(AuthContext);

  const imgTypes = ["image/png", "image/jpeg", "image/jpg"];

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    setError(""); // Clear any previous errors

    if (!itemImage.current.files[0]) {
      setError("Please select an image.");
      return;
    }

    if (!imgTypes.includes(itemImage.current.files[0].type)) {
      return setError('Please use a valid image');
    }

    let currentDate = new Date();
    let dueDate = currentDate.setHours(
      currentDate.getHours() + itemDuration.current.value
    );

    let newAuction = {
      email: currentUser.email,
      title: itemTitle.current.value,
      desc: itemDesc.current.value,
      curPrice: startPrice.current.value,
      duration: dueDate,
      itemImage: itemImage.current.files[0],
    };

    console.log("New auction data:", newAuction);

    try {
      setAuction(newAuction);
      setShowForm(false);
      itemImage.current.value = ""; // Clear the file input field
    } catch (error) {
      console.error("Error setting auction data:", error);
      setError("Failed to submit auction data. Please try again later.");
    }
    setAuction(newAuction);
    setShowForm(false);
  };

  return (
    <>
      <div
        className={`form-overlay ${showForm ? "show" : ""}`}
        onClick={() => setShowForm(false)}
      ></div>
      <button className="add-auction-btn" onClick={() => setShowForm(true)}>
        + Auction
      </button>
      {showForm && (
        <div className={`form-container ${showForm ? "show" : ""}`}>
          <form className="auction" onSubmit={submitForm}>
            <div className="heading">
              <div className="text">Create Auction</div>
              <div className="under"></div>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="box">
              <div className="input">
                <img src="/assets/person.png" alt="" />
                <input
                  type="text"
                  placeholder="Item Title"
                  required
                  ref={itemTitle}
                />
              </div>
              <div className="input">
                <img src="/assets/email.png" alt="" />
                <input
                  type="text"
                  placeholder="Item Description"
                  required
                  ref={itemDesc}
                />
              </div>
              <div className="input">
                <img src="/assets/password.png" alt="" />
                <input
                  type="number"
                  placeholder="Start Price"
                  required
                  ref={startPrice}
                />
              </div>
              <div className="input">
                <img src="/assets/password.png" alt="" />
                <input
                  type="number"
                  placeholder="Item Duration in hours"
                  required
                  ref={itemDuration}
                />
              </div>
              <div className="input">
                <img src="/assets/password.png" alt="" />
                <input type="text" value={currentUser?.email } readOnly />
              </div>
              <div className="input">
                <img src="/assets/password.png" alt="" />
                <input
                  type="file"
                  label="Select Item Image"
                  custom
                  required
                  ref={itemImage}
                />
              </div>
            </div>
            <div className="submit-btn-container">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddAuction;
