import React from "react";

import "../css/Testmonials.css";
import imageone from "../../Picture/teststtsts/pic-testmoinals-1.jpg";
import imageote from "../../Picture/teststtsts/pic-testmoinals-2.jpg";
import imagether from "../../Picture/teststtsts/pic-testmoinals-3.jpg";
import imagethfor from "../../Picture/teststtsts/pic-testmoinals-4.jpg";
import imagethfiv from "../../Picture/teststtsts/pic-testmoinals-7.png";

const Testmonial = () => {
  return (
    <div className="Testmonial my-5 pt-5">
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-5">Testimonials</h1>
          {/* <div className="text ">
            <div className="imaaage text-center">
              <img src={imageone} alt="pic" />
            </div>
            <p className="mb-2 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
              cupiditate totam. Excepturi, suscipit! Illo ullam, in molestias
              dolores, dolore cumque, odit consectetur adipisicing elit. Quos,
              cupiditate totam. Excepturi, suscipit!
            </p>
            <h5> We Pride Our Services</h5>
          </div> */}

          {/* *********************************************************************************** */}

          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="text ">
                  <div className="imaaage text-center">
                    <img src={imageone} alt="pic" />
                  </div>
                  <p className="mb-2 mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, cupiditate totam. Excepturi, suscipit! Illo ullam, in
                    molestias dolores, dolore cumque, odit consectetur
                    adipisicing elit. Quos, cupiditate totam. Excepturi,
                    suscipit!
                  </p>
                  <h5>Client-1</h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="text ">
                  <div className="imaaage text-center">
                    <img src={imageote} alt="pic" />
                  </div>
                  <p className="mb-2 mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, cupiditate totam. Excepturi, suscipit! Illo ullam, in
                    molestias dolores, dolore cumque, odit consectetur
                    adipisicing elit. Quos, cupiditate totam. Excepturi,
                    suscipit!
                  </p>
                  <h5>Client-2</h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="text ">
                  <div className="imaaage text-center">
                    <img src={imagether} alt="pic" />
                  </div>
                  <p className="mb-2 mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, cupiditate totam. Excepturi, suscipit! Illo ullam, in
                    molestias dolores, dolore cumque, odit consectetur
                    adipisicing elit. Quos, cupiditate totam. Excepturi,
                    suscipit!
                  </p>
                  <h5>Client-3</h5>
                </div>
              </div>
              <div className="carousel-item">
              <div className="text ">
                  <div className="imaaage text-center">
                    <img src={imagethfor} alt="pic" />
                  </div>
                  <p className="mb-2 mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, cupiditate totam. Excepturi, suscipit! Illo ullam, in
                    molestias dolores, dolore cumque, odit consectetur
                    adipisicing elit. Quos, cupiditate totam. Excepturi,
                    suscipit!
                  </p>
                  <h5>Client-4</h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* ******************************************************************************* */}
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
