import { React, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
// import Education from "./components/Education";
import Work from "./components/Work";
import Border from "./components/Border";
import Footer from "./components/Footer";
import HoyBoard from "./components/HoyBoard";
import ReactFullpage from "@fullpage/react-fullpage";
import Particles from "react-tsparticles";
import particleParams from "./particles.js";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./static/css/App.css";

function onLeave(origin, destination, direction) {
  // console.log(origin.anchor, destination.anchor);
  $("#" + origin.anchor + "-nav").removeClass("active");
  $("#" + destination.anchor + "-nav").addClass("active");
}

export default function App(props) {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY);
    ReactGA.pageview("/");
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/projects/HoyBoard">
          <HoyBoard />
        </Route>
        <Route path="/">
          <div className="main">
            <ReactFullpage
              anchors={["home", "about", "work", /* "education",*/ "footer"]}
              licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
              recordHistory={false}
              onLeave={onLeave}
              fitToSection
              scrollingSpeed={600}
              responsiveWidth={1050}
              touchSensitivity={35}
              fixedElements={[".particles", ".nav-container"]}
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <Particles
                      height="100vh"
                      params={particleParams}
                      className="particles"
                    />
                    <Navbar />
                    <Home />
                    <Border />
                    <About />
                    <Border />
                    <Work />
                    {/*  <Border />
                    <Education /> 
                    <Border />*/}
                    <Footer />
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
