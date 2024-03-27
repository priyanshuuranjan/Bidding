import React from "react";
import "./Program.css";

const Programs = () => {
  const program_1 = "/assets/p1.png";
  const program_2 = "/assets/p2.jpeg";
  const program_3 = "/assets/p3.jpeg";

  /*
     const program_1 =
    "https://img.freepik.com/free-photo/3d-rendering-cartoon-business-men_23-2150797696.jpg?t=st=1711097166~exp=1711100766~hmac=7ede299244a02513cb9bb80f7da4401b4342a29f5cc05873cbc27b8c3a0c43ed&w=740";
  const program_2 =
    "https://img.freepik.com/free-photo/photorealistic-money-with-plant_23-2151027594.jpg?t=st=1711060578~exp=1711064178~hmac=10667f48c1c54a342263d5923cc1188fee87dc5b7e6b1fc8d55cc703d4795e77&w=740";
  const program_3 =
    "https://img.freepik.com/free-photo/portrait-man-christmas-celebrations_23-2150936471.jpg?t=st=1711096567~exp=1711100167~hmac=b9284c7521a2da61eefc1bb0c6283fe609d549bf14c06ef580ec24a5b04ed1ee&w=740";
 */
  // using inline images for icon1
  const program_icons2 = "/assets/icon2.jpg";
  const program_icons3 = "/assets/icon3.jpg";

  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src="/assets/icon1.jpg" alt="icon1" />
          <p>C2C</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="image" />
        <div className="caption">
          <img src={program_icons2} alt="" />
          <p>Cost Effective</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icons3} alt="" />
          <p>Home Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
