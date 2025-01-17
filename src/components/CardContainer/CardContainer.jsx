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
    { angle: "-30deg", xOffset: "-15vw", backgroundImage: aboutImage, link: "/about" },
    { angle: "-10deg", xOffset: "-5vw", backgroundImage: sponsorsImage, link: "/sponsors" },
    { angle: "10deg", xOffset: "5vw", backgroundImage: timelineImage, link: "/timeline" },
    { angle: "30deg", xOffset: "15vw", backgroundImage: tracksImage, link: "/tracks" },
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
