import React from "react";
import "./Program.css";

const Programs = () => {
  const program_1 =
    "https://img.freepik.com/free-photo/3d-rendering-cartoon-business-men_23-2150797696.jpg?t=st=1711055491~exp=1711059091~hmac=eda0584d9f91cb06d73c989e2a25d4fa214d5cafbff48a90a4a6941df6498b25&w=740";
  const program_2 =
    "https://img.freepik.com/free-photo/photorealistic-money-with-plant_23-2151027594.jpg?t=st=1711060578~exp=1711064178~hmac=10667f48c1c54a342263d5923cc1188fee87dc5b7e6b1fc8d55cc703d4795e77&w=740";
  const program_3 =
    "https://img.freepik.com/premium-photo/delivery-man-riding-scooter-illustration_99297-35.jpg?w=826";

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
