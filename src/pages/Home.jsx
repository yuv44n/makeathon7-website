import React from "react";
import styles from "../styles/Home.module.css";
import CardContainer from "../components/CardContainer/CardContainer";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner />
      <CardContainer />
    </div>
  );
};

export default Home;
