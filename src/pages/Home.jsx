import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import CardContainer from "../components/CardContainer/CardContainer";
import Banner from "../components/Banner/Banner";
import Buttons from "../components/Buttons/Buttons";

const Home = () => {
  useEffect(() => {
    const flickerElement = document.querySelector(`.${styles.home}`);
    let grayscale = 0;
    let increasing = true;

    const interval = setInterval(() => {
      if (increasing) {
        grayscale += 10;
        if (grayscale >= 60) increasing = false;
      } else {
        grayscale -= 10;
        if (grayscale <= 0) increasing = true;
      }
      flickerElement.style.filter = `grayscale(${grayscale}%)`;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.home}>
      <Banner />
      <CardContainer />
      <Buttons
        iconType="firstIcon"
        position={{ type: "absolute", top: "45vh", left: "30vw" }}
        onClick={() => alert("Well.....i work for now?")}
        style={{ size: "48px", height: "6vh", width: "18vw", marginTop: "20px" }}
        backgroundColor="rgba(55, 112, 255, 1)"
      >
        Apply with DevFolio
      </Buttons>
      <Buttons
        iconType="secondIcon"
        position={{ type: "absolute", top: "45vh", right: "30vw" }}
        onClick={() => alert("Well.....i work for now?")}
        style={{ size: "48px", height: "6vh", width: "18vw", marginTop: "20px" }}
      >
        Download Our App
      </Buttons>
    </div>
  );
};

export default Home;
