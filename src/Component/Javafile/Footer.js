import React from "react";
import "../css/Footer.css"
const Footer = () => {
  return (
    <div className="Footer ">
      <div className="container">
        <div className="row m-auto">
          <div className="infor d-flex justify-content-around align-items-center">
            <h5>Register</h5>
            <h5>Form</h5>
            <h5>Artificial</h5>
            <h5>FAQ</h5>
          </div>
          <div className="icon">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-tiktok"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-regular fa-bell"></i>
          </div>
          <div className="copyrig">
          <p className="text-center">@ 2023 Footer All Right Reseved By Alaa El Naggar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
