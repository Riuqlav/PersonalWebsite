import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Fade from "react-reveal/Fade";
import profilePic from "../static/images/AboutPic.jpg";
import Socials from "./Socials";
import WAVE from "../static/images/WAVE.png";

import { makeStyles } from "@material-ui/core/styles";
import "../static/css/About.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="section about">
      <div className="about-container">
        <div className="about-left">
          <Fade left>
            <h2 className="about-greeting">
              Hi! I'm VaL{" "}
              <img className="wave-emoji" alt="Wave Emoji" src={WAVE} />
            </h2>
            <p className="about-text" align="left">
           Franco-Brazilian full-stack developer skilled in JavaScript, TypeScript, <br/>CSS (and styling libraries), and Material UI. <br/>
Leveraging GraphQL, Docker, and Bitbucket to enhance development efficiency. <br/> Committed to crafting high-quality components and superior user experiences.</p>
            <Socials noLeft />
          </Fade>
        </div>

        <div className="about-right">
          <Fade right>
            <Avatar
              className={classes.large + " about-avatar"}
              src={profilePic}
              alt="Valquir Souza"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
