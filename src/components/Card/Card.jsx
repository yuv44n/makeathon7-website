import React from "react";
import styles from "./Card.module.css";

const Card = ({ angle, xOffset, backgroundImage, link }) => {
  return (
    <a
      href={link}
      className={styles.card}
      style={{
        "--angle": angle,
        "--x-offset": xOffset,
        backgroundImage: `url(${backgroundImage})`,
      }}
    ></a>
  );
};

export default Card;
