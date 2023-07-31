import React from "react";
import WorkCard from "./cards/WorkCard";
import BARCRAWL from "../static/images/BARCRAWL.png";
import TNR from "../static/images/TNR.png";
import SBG from "../static/images/SBG.png";
import MEET from "../static/images/MEET.png";
import TREBUCHE from "../static/images/TREBUCHE.png";
import RVIDEO from "../static/images/RVIDEO.png";
import "../static/css/Work.css";
import Fade from "react-reveal/Fade";
import ReactGA from "react-ga";

import "../static/css/Skills.css";


export default function Work() {
  return (
    <div className="section work ">
      <div className="slide">
        <h2 className="section-heading">My Work</h2>
        <Fade bottom>
          <div className="experience-cards-div">
          <WorkCard
              cardInfo={{
                company: "SBG Systems",
                companyLink: "https://www.sbg-systems.com/",
                logo: SBG,
                date: "2023 - Today",
                role: "Full Stack Developer",
                descBullets: [
                    "Leveraged React, TypeScript, and Material UI for user-centric interfaces",
                    "Employed Docker, Bitbucket, and JIRA for streamlined workflow",
                    "Implemented GraphQL with urql for efficient data management",
                ],
              }}
            />
                <WorkCard
                  cardInfo={{
                    company: "The New Royals-NFT",
                    companyLink: "https://riuqlav.github.io/TNR/",
                    logo: TNR,
                    // desc: "<VIEW CODE>",
                    link: "https://github.com/Riuqlav/TNR",
                    date: "2023 - Today",
                    role: "Front End Developer",
                    descBullets: [
                      "React, MUI, Tailwind, and Git for effective development and version control",
                      "Contributed to UX development by aiding the copyright and design teams",
                      "Implemented and sustained updates on the UX front page"
                    ],
                  }}
                />
            <WorkCard
              cardInfo={{
                company: "MeetIQs",
                companyLink: "https://meetiqs.de/",
                role: "Front End Developer",
                logo: MEET,
                date: "2020",
                descBullets: [
                  "Assisted the copyright and design teams in the development of the UX",
                  "Maintained and updated features on the front page the UX",
                  "Experienced AGILE/Scrum methodology with Jira",
                ],
              }}
            />
          </div>
        </Fade>
      </div>
      <div className="slide">
        <h2 className="section-heading">My Work</h2>
        <div className="experience-cards-div">
        <WorkCard
            cardInfo={{
              company: "Trebuché E-shop",
              companyLink: "https://riuqlav.github.io/trebuche/",
              logo: TREBUCHE,
              desc: "<VIEW CODE>",
              link: "https://github.com/Riuqlav/trebuche",
              date: "2020",
              role: "FrontEnd Developer",
              descBullets: [
                  "Revamped UI and app interface using Styled Components",
                  "Developed over 50 reusable components used organization-wide",
                  "Implemented mock data to showcase all 7 pages' layout"
                ],
            }}
          />
          <WorkCard
            cardInfo={{
              company: "Rvideo",
              logo: RVIDEO,
              companyLink: "https://rvideo.netlify.app/",
              desc: "<VIEW CODE>",
              link: "https://github.com/Riuqlav/RVideo",
              date: "2022",
              role: "FullStack Developer",
              descBullets: [
                "Built with a Node JS server, Socket io, and React JS",
                "Hosted with Heroku (backend) and Netlify (frontend)",
                "Styled with Material UI and CSS",
              ],
              headerColor: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
            }}
          />
          <WorkCard
            cardInfo={{
              company: "BAR CRAWL",
              companyLink: "https://riuqlav.github.io/bar-crawl-meetup/",
              logo: BARCRAWL,
              desc: "<VIEW CODE>",
              link: "https://github.com/Riuqlav/bar-crawl-meetup",
              date: "2021",
              role: "FullStack Developer",
              descBullets: [
                "Displayed the fundamentals of a complete CRUD app",
                "Used React hooks, Route, Firebase Database, and Storage",
                "Styled with CSS Modules",
              ],
            }}
          />
        </div>
        <ReactGA.OutboundLink></ReactGA.OutboundLink>
      </div>
    </div>
  );
}