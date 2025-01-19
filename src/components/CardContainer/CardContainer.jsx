import React from "react";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

// Import images from assets folder
import aboutImage from "../../assets/abt.png";
import sponsorsImage from "../../assets/spon.png";
import timelineImage from "../../assets/time.png";
import tracksImage from "../../assets/tracks.png";

const CardContainer = () => {
  const cards = [
    { angle: "-25deg", xOffset: "-12vw", backgroundImage: aboutImage, link: "/about" },
    { angle: "-9deg", xOffset: "-4vw", backgroundImage: sponsorsImage, link: "/sponsors" },
    { angle: "9deg", xOffset: "4vw", backgroundImage: tracksImage, link: "/tracks" },
    { angle: "25deg", xOffset: "12vw", backgroundImage: timelineImage, link: "/timeline" },
  ];

  return (
    <div className={styles.cardContainer}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
