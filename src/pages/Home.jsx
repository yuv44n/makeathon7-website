import React from "react";
import styles from "../styles/Home.module.css";
import CardContainer from "../components/CardContainer/CardContainer";
import Banner from "../components/Banner/Banner";
import Buttons from "../components/Buttons/Buttons";

import devfolioImg from "../assets/devfolio.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner />
      <CardContainer />
      <Buttons
        imageUrl={devfolioImg}
        position={{ type: "absolute", top: "50vh", left: "30vw" }}
        onClick={() => alert("Well.....i work for now?")}
        style={{ size: "48px", height: "48px"}}
      >Devfolio</Buttons>
    </div>
  );
};

export default Home;
