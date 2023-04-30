import React, { useState } from "react";

import { Data } from "./Data";
import "../css/Ourproduct.css";
const Ourproduct = () => {
  let [data, setdata] = useState(Data);
  return (
    <div className="Ourproduct py-5">
      <div className="container">
        <div className="text mb-5">
          <h1 className="mb-3">Explor Our Foods</h1>
          <p className=" m-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quidem
            officiis nihil tetur adipisicing elit. Ut quidem officiis nihil
            soluta veniam molestiae quae expedita laborum? Vel, ipsam dignis
            doloribus quo perspiciatis esse nihil rem excepturi adipisci minima.
          </p>
        </div>
        <div className="row">
          {data.map((ele) => (
            <div key={ele.id} className="car col-md-6 col-lg-4 mb-4 mb-md-0 ">
              <img src={ele.image} className="card-img-top" alt="pic" />
              <div className="car-body">
                <h5 className="car-title">{ele.title}</h5>
                <h6 className="car-text">
                  Time: {ele.time} Minute : Section-1
                </h6>
                <h4 className="py-2">
                  Price: ${ele.price}{" "}
                  <span className="h4span"> ${ele.oldprice}</span>
                </h4>
                <a href="/#" className="btn btn-danger">
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourproduct;
