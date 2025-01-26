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
        iconType="firstIcon"
        position={{ type: "absolute", top: "45vh", left: "30vw" }}
        onClick={() => alert("Well.....i work for now?")}
        style={{ size: "48px", height: "6vh", width: "18vw" , marginTop: "20px"}}
  
      >
        Apply with DevFolio
      </Buttons>
      <Buttons
        iconType="secondIcon"
        position={{ type: "absolute", top: "45vh", right: "30vw" }}
        onClick={() => alert("Well.....i work for now?")}
        style={{ size: "48px", height: "6vh", width: "18vw",  marginTop: "20px"}}
      >
        Download Our App
      </Buttons>
    </div>
  );
};

export default Home;
