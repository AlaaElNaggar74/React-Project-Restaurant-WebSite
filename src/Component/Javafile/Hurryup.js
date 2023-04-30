import React from "react";
import "../css/Hurryup.css"
const Hurryup = () => {
  return (
    <div className="Hurryup my-5">
      <div className="tex  hurryUpText m-auto">
        <h1 className="mb-4 px-3">
          Hurry Up ! Subscribe Our Newsletter And Get 25% oFF
        </h1>
        <p> limited time and item so hurry up to catch the operatinh</p>
        <div className="form d-flex justify-content-between align-items-center  hurryUpinput  m-auto">
          <input
            type="text"
            class="form-control me-3"
            placeholder="Email Addreess Here"
          />
          <button type="button" class="btn btn-danger">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hurryup;
