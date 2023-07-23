import React from "react";
import Socials from "./Socials";
import Button from "@material-ui/core/Button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="section footer fp-auto-height">
      <footer className="footer-div">
        <Socials />
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
          <Button className="section-button">
          <FontAwesomeIcon className="more-icon" icon={faDownload} style={{ marginRight: '3px' }} />
              Resume
          </Button>
          </a>
        <h6 className="footer-text">{`© ${new Date().getFullYear()} Valquir Souza`}</h6>
      </footer>
    </div>
  );
}
