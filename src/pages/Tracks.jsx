import React from "react";
import styles from "../styles/Tracks.module.css";

const Tracks = () => {
  return (
    <div className={styles.tracksContainer}>
      <div className={styles.tracks}>
        <h1 className={styles.text}>Tracks Page</h1>
        <div className={styles.line}></div>
        <div className={styles.box1}>
          <div className={styles.removebgPreview}></div>
          <div className={styles.text1}>
            <p>Greetings Agent!</p>
            <p>Choose Your Mission</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
