import React from "react";
import Hidden from "@material-ui/core/Hidden";
import DM from "../static/images/DM.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand fixed-top nav-container">
      <div className="nav-brand-div">
        <Hidden smDown>
          <a className="js-scroll active" href="#home">
            <img className="dm-logo" src={DM} alt="DM Logo" />
          </a>
        </Hidden>
      </div>

      <div className="nav-sections-div">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id="home-nav" className="nav-link js-scroll active" href="#home">
              <h5 className="nav-section-text">Home</h5>
            </a>
          </li>
          <li className="nav-item">
            <a id="about-nav" className="nav-link js-scroll" href="#about">
              <h5 className="nav-section-text">About</h5>
            </a>
          </li>
          <li className="nav-item">
            <a id="work-nav" className="nav-link js-scroll" href="#work">
              <h5 className="nav-section-text">Work</h5>
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              id="education-nav"
              className="nav-link js-scroll"
              href="#education"
            >
              <h5 className="nav-section-text">Education</h5>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
