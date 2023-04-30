import React from "react";
import imagdis from "../../Picture/pexels-engin-akyurt-2271099.jpg";
import "../css/Discrptfood.css";

const Discrptfood = () => {
  return (
    <div className="Discrptfood py-5 mt-5">
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 ">
            <img src={imagdis} alt="Discrptfood" />
          </div>
          <div className="col-md-5 d-flex align-items-center ">
            <div className="distext  pt-4 pt-sm-0 ">
              <h2 >We Pride Our Services On Making Real Food From The Best Ingredients.</h2>
              {/* <h2>Good Food Choices Are Good Investment.</h2> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                facilis, incidunt voluptate quasi ducimus aspernatur ea illo
                quam eaque, voluptas repellat blanditiis veritatis harum quod id
                quo laborum! Voluptatum, debitis?
              </p>
              <button type="button" className="btn btn-danger ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discrptfood;
