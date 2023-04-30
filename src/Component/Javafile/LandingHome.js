

import React from 'react';

import "../css/LandingHome.css"
// import LandImage from "../../Picture/pic-lan-home-1.jpg"

const LandingHome = () => {
  return (
    <div className='LandingHome '>
      <div className="container">
        <div className="row ">
          <div className=" px-3 col-md-5 text-left hhh d-flex align-items-center ">
            <div className="textlandpage">
              <h1>Good Food Choices Are Good Investment.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facilis, incidunt voluptate quasi ducimus aspernatur ea illo quam eaque, voluptas repellat blanditiis veritatis harum quod id quo laborum! Voluptatum, debitis?</p>
              <div className="buttto d-flex ">
              <button type="button" className="btn btn-danger me-4">Order Now <i className="fa-solid fa-basket-shopping ms-2"></i></button>
              <button type="button" className="btn btn-outline-danger">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 hhh d-nonex">
              {/* <img src={LandImage} alt="lan"/> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default LandingHome;
