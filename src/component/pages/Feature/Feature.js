import React from "react";
import "./Feature.css";
import Programs from "./Programs";

const Feature = ({subtitle, title}) => {
  return (
   <>
    <div className="title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
      
    </div>
    <Programs/>
   </>
  );
};

export default Feature;
