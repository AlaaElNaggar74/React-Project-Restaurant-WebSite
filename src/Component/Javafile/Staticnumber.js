import React from "react";
import "../css/Staticnumber.css";
const Staticnumber = () => {
  return (
    <div className="Staticnumber bg-danger py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 bg-danger">
            <div className="conati">
              <h1 className="text-center fw-bold">1287+</h1>
              <h5 className="text-center">Saving</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-danger">
          <div className="conati">
              <h1 className="text-center fw-bold">5789+</h1>
              <h5 className="text-center">Photos</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-danger">
          <div className="conati">
              <h1 className="text-center fw-bold">7539+</h1>
              <h5 className="text-center">Rockets</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-danger">
          <div className="conati">
              <h1 className="text-center fw-bold">1297+</h1>
              <h5 className="text-center">Glops</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staticnumber;
