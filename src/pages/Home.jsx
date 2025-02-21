import React, { useRef, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Buttons from "../components/Buttons/Buttons";
import CardContainer from "../components/CardContainer/CardContainer";
import StackedCardContainer from "../components/StackedCardContainer/StackedCardContainer";
import stackedStyles from "../components/StackedCardContainer/StackedCardContainer.module.css";
import styles from "../styles/Home.module.css";

const Home = () => {
  const homeRef = useRef(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false); // Track scroll state

  useEffect(() => {
    const flickerElement = document.querySelector(`.${styles.home}`);
    let grayscale = 0;
    let increasing = true;
    const interval = setInterval(() => {
      if (increasing) {
        grayscale += 7.5;
        if (grayscale >= 60) increasing = false;
      } else {
        grayscale -= 10;
        if (grayscale <= 0) increasing = true;
      }
      flickerElement.style.filter = `grayscale(${grayscale}%)`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    
  
  const scrollToTop = () => {
    if (isScrolledDown) {
      // Scroll up to the top
      homeRef?.current.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll down to a specific point (e.g., 90% of the page height)
      homeRef?.current.scrollTo({
        left: 0,
        top: 95 * (window.innerHeight / 100),
        behavior: "smooth",
      });
    }
    // Toggle the scroll state
    setIsScrolledDown(!isScrolledDown);
  };

  return (
    <div
      ref={homeRef}
      className={styles.home}
      onScroll={(e) => handleScroll(homeRef, e)}
    >
      <img
        src="../../mlsclogo.png"
        alt="mlsc_logo"
        className={styles.mlsc_logo}
      />
      <Banner />
      <div className={styles.flickerEffect}></div>
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
      <StackedCardContainer scrollToTop={scrollToTop} />
    </div>
  );
};

let prevCardsPosition = Array(5).fill(-1);
let cardsPosition = Array(5).fill(-1);

const handleScroll = (homeRef, event) => {
  let cardsEl = document.querySelectorAll(`.${stackedStyles.stackedCard3}`);
  cardsEl.forEach((cardEl, index) => {
    console.log(index, cardEl.getBoundingClientRect().top);
  });
};

export default Home;