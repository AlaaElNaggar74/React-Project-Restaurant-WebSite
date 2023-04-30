import React from "react";

import "../css/Nav.css"


const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbarback-custom">
        <div className="container">
          <a className="navbar-brand bg-danger px-3 rounded-5" href="/#">
          <h3 className="tex-center">NG</h3>
          <h5 className="text-center">Restaurant</h5>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Explore/Foods
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                <button type="button" className="btn btn-outline-danger">8542 265 53332</button>
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
