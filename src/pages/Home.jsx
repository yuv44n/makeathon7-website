import React, { useRef } from "react";
import AngleUpIcon from "../components/AngleUpIcon/AngleUpIcon";
import Banner from "../components/Banner/Banner";
import Buttons from "../components/Buttons/Buttons";
import CardContainer from "../components/CardContainer/CardContainer";
import Lamp from "../components/Lamp/Lamp";
import StackedCardContainer from "../components/StackedCardContainer/StackedCardContainer";
import stackedStyles from "../components/StackedCardContainer/StackedCardContainer.module.css";
import styles from "../styles/Home.module.css";

const Home = () => {
  const homeRef = useRef(null);
  return (
    <div
      ref={homeRef}
      className={styles.home}
      onScroll={(e) => handleScroll(homeRef, e)}
    >
      <img
        src="../../public/mlsclogo.png"
        alt="mlsc_logo"
        className={styles.mlsc_logo}
      />
      <Lamp />
      <Banner />
      <div className={styles.button_container}>
        <Buttons
          iconType="devfolio"
          onClick={() => alert("Well.....i work for now?")}
          style={{
            size: "48px",
            height: "6vh",
            width: "207px",
          }}
          backgroundColor="rgba(55, 112, 255, 1)"
        >
          Apply with DevFolio
        </Buttons>
        <Buttons
          iconType="download"
          onClick={() => alert("Well.....i work for now?")}
          style={{
            size: "48px",
            height: "6vh",
            width: "207px",
          }}
        >
          Download Our App
        </Buttons>
      </div>
      <CardContainer />
      <div
        className={styles.angleUpIcon}
        onClick={() =>
          homeRef?.current.scrollTo({
            left: 0,
            top: 105 * (window.innerHeight / 100), //110vh
            behavior: "smooth",
          })
        }
      >
        <AngleUpIcon />
      </div>
      <StackedCardContainer />
    </div>
  );
};

let prevCardsPosition = Array(4).fill(-1);
let cardsPosition = Array(4).fill(-1);
const handleScroll = (homeRef, event) => {
  // console.log(homeRef.current.scrollTop);
  // if (homeRef.current.scrollTop > 0) {
  //   const angleUpIcon = document.querySelector(`.${styles.angleUpIcon})`);
  //   if (angleUpIcon) angleUpIcon.style.display = "none";
  // }
  let cardsEl = document.querySelectorAll(`.${stackedStyles.stackedCard3}`);
  cardsEl.forEach((cardEl, index) => {
    console.log(index, cardEl.getBoundingClientRect().top);
  });
  /*
  const centreY = window.innerHeight / 2;
  let cardsEl = document.querySelectorAll(`.${styles2.stackedCard3}`);
  cardsEl?.forEach((cardEl, index) => {
    cardsPosition[index] = cardEl.getBoundingClientRect().top;
    console.log(cardEl.style.transform);
    const match = cardEl.style.transform.match(/translateY\((.*)%\)/);
    // if (match) {
    //   const translateY = parseInt(match[1]);
    //   if (index == 0) {
    //     cardEl.style.transform = `translateY(${translateY + 40}%)`;
    //   }
    // } else console.log("no match");
  });

  // for (let i = 0; i < cardsPosition.length; i++) {
  //   // Card entered the centre
  //   if (cardsPosition[i] < centreY && prevCardsPosition[i] >= centreY) {
  //     // cardEl.style.transform = "translateY(0%)";
  //     console.log(cardsPosition.style.transform);
  //   }
  // }

  console.log(cardsEl);
  console.log(cardsPosition);
  prevCardsPosition = cardsPosition;
  */
};

export default Home;
