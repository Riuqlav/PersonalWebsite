import React from "react";
import Typed from "react-typed";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="section home">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center" className="home-content">
          <h2 className="main-title">VALQUIR SOUZA</h2>
          <h3 className="main-subtitle">
            <Typed
              strings={[
                "FrontEnd Developer",
                "UI/UX Designer",
                "AI Enthusiast",
              ]}
              typeSpeed={70}
              backDelay={1000}
              backSpeed={50}
              loop
            />
          </h3>
          <div className="button-editing">
          <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
          <Button className="section-button">
          <FontAwesomeIcon className="more-icon" icon={faDownload} style={{ marginRight: '3px' }} />
              Resume
          </Button>
          </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
