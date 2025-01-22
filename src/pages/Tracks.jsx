import React, { useState } from "react";
import styles from "../styles/Tracks.module.css";

const Tracks = () => {
  const [trackText, setTrackText] = useState("TRACKS");
  const [clickedButton, setClickedButton] = useState(null); // Track clicked button
  const [fadeClass, setFadeClass] = useState(""); // Track fade animation class
  const [morphClass, setMorphClass] = useState(""); // Track morph animation class

  const handleButtonClick = (trackNumber) => {
    setFadeClass("fade-out");
    setMorphClass("morph");
    setTimeout(() => {
      setTrackText(`TRACK ${trackNumber}`);
      setClickedButton(trackNumber);
      setFadeClass("fade-in");
    }, 500); // Match the duration of the fade-out animation
  };

  const handleReset = () => {
    setFadeClass("fade-out");
    setMorphClass("");
    setTimeout(() => {
      setTrackText("TRACKS");
      setClickedButton(null);
      setFadeClass("fade-in");
    }, 500); // Match the duration of the fade-out animation
  };

  return (
    <div className={styles.tracksContainer}>
      <div className={styles.tracks}>
        {clickedButton === null ? (
          <>
            <h1 className={`${styles.text} ${styles[fadeClass]}`}>
              {trackText}
            </h1>
            <div className={`${styles.buttonContainer} ${styles[morphClass]}`}>
              <button
                className={styles.button1}
                onClick={() => handleButtonClick(1)}
              ></button>
              <button
                className={styles.button2}
                onClick={() => handleButtonClick(2)}
              ></button>
              <button
                className={styles.button3}
                onClick={() => handleButtonClick(3)}
              ></button>
              <button
                className={styles.button4}
                onClick={() => handleButtonClick(4)}
              ></button>
              <button
                className={styles.button5}
                onClick={() => handleButtonClick(5)}
              ></button>
            </div>
            <div className={`${styles.line} ${styles[morphClass]}`}></div>
            <div className={styles.box1}>
              <div className={styles.removebgPreview}></div>
              <div className={styles.text1}>
                <p>Greetings Agent!</p>
                <p>Choose Your Mission</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1
              className={`${styles.text} ${styles[fadeClass]}`}
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                position: "relative",
                top: "284px",
              }}
            >
              {trackText}
            </h1>
            <div className={`${styles.text3} ${styles[fadeClass]}`}>
              Additional Information for {trackText}
            </div>
            <div
              className={`${styles.buttonContainer} ${styles[morphClass]}`}
              style={{ top: "82px" }}
            >
              <button
                className={styles.button1}
                onClick={() => handleButtonClick(1)}
              ></button>
              <button
                className={styles.button2}
                onClick={() => handleButtonClick(2)}
              ></button>
              <button
                className={styles.button3}
                onClick={() => handleButtonClick(3)}
              ></button>
              <button
                className={styles.button4}
                onClick={() => handleButtonClick(4)}
              ></button>
              <button
                className={styles.button5}
                onClick={() => handleButtonClick(5)}
              ></button>
            </div>
            <div
              className={`${styles.line} ${styles[morphClass]}`}
              style={{ top: "132px" }}
            ></div>
          </>
        )}
        {clickedButton !== null && (
          <button className={styles.button6} onClick={handleReset}></button>
        )}
      </div>
    </div>
  );
};

export default Tracks;
