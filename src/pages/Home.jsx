import React from "react";
import styles from "../styles/Home.module.css";
import CardContainer from "../components/CardContainer/CardContainer";
import Banner from "../components/Banner/Banner";
import Buttons from "../components/Buttons/Buttons";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner />
      <CardContainer />
      <Buttons
        imageUrl="../assets/devfolio.png"
        position={{ type: "absolute", top: "50vh", left: "30vw" }}
        onClick={() => alert("Well.....i work for now?")}
      >Making me work is Russian Roulette at its finest</Buttons>
    </div>
  );
};

export default Home;
