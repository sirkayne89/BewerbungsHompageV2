import React from "react";
import "./projekte.css";
import QFO from "./image/QFO.png";
import QTD from "./image/QTD.png";
import QEE from "./image/QEE.png";
import QRO from "./image/QRO.png";
import MZL from "./image/moviezland.webp";
import IW from "./image/IW.png";
import LTQ from "./image/LTQ.webp";


const projekte = () => {
  const projectData = [
    {
      url: "",
      image: QRO,
      title: "Q-Reserve Osmose",
      description: "Fullstack Ecommerce-Plattform für den Verkauf von Osmoseanlagen.",
      comingSoon: true,
    },
    {
      url: "https://q-future.org",
      image: QFO,
      title: "Q-Future",
      description: "Eine Digitale Plattform für Gemeinsame Visionen und Ziele.",
    },
    {
      url: "https://q-tech.dev",
      image: QTD,
      title: "Q-Tech Dev",
      description: "Freelancer Webentwicklung und IT-Consulting.",
    },
    {
      url: "https://link.q-tech.dev",
      image: LTQ,
      title: "Linktree Q-Tech Dev",
      description: "Unsere Linktree für alle unsere Projekte und Social Media Links.",
    },
    {
      url: "https://q-energyexperts.de",
      image: QEE,
      title: "Q-Energy Experts",
      description: "Strom- und Gasverträge für Privat- und Geschäftskunden.",
    },
    {
      url: "https://moviezland.de",
      image: MZL,
      title: "Moviezland",
      description: "Eine Plattform für zum finden von Filmen und Serien.",
    },
    {
      url: "https://isyanworld.de",
      image: IW,
      title: "Isyanworld",
      description: "Musiker und Produzenten Landingpage für das Label Isyanworld.",
    },
  ];

  return (
    <div className="hauptbereich3">
      <section id="projekte">
        <h3>Projekte</h3>
        <div className="karten-container">
          {projectData.map((project, index) => (
            <a
              key={index}
              className="karte"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="image-container">
                <img src={project.image} alt={project.title} className="karten-img" />
                {project.comingSoon && <div className="coming-soon-banner">Coming Soon</div>}
              </div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default projekte;
