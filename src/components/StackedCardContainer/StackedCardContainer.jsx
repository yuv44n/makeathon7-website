import React, { useEffect, useRef } from "react";
import styles from "./StackedCardContainer.module.css";

// Import images from assets folder
import aboutImage from "../../assets/abt.png";
import sponsorsImage from "../../assets/spon.png";
import timelineImage from "../../assets/time.png";
import tracksImage from "../../assets/tracks.png";

const StackedCardContainer = () => {
  const cards = [
    {
      angle: "0deg",
      xOffset: "0vw",
      backgroundImage: aboutImage,
      link: "/about",
    },
    {
      angle: "0deg",
      xOffset: "0vw",
      backgroundImage: sponsorsImage,
      link: "/sponsors",
    },
    {
      angle: "0deg",
      xOffset: "0vw",
      backgroundImage: tracksImage,
      link: "/tracks",
    },
    {
      angle: "0deg",
      xOffset: "0vw",
      backgroundImage: timelineImage,
      link: "/timeline",
    },
  ];
  let cardsRef = useRef(Array(cards.length).fill(null));
  let cardsPosition = Array(cards.length).fill(-1);
  useEffect(() => {
    const handleScroll = (e) => {
      let cardsEl = cardsRef.current;
      cardsEl.forEach((el, index) => {
        cardsPosition[index] = el.getBoundingClientRect().top;
      });

      console.log(cardsPosition);
    };

    // Attach the scroll event listener
    let cardsEl = cardsRef.current;
    cardsEl.forEach((el) => el.addEventListener("scroll", handleScroll));

    // Cleanup on unmount
    return () => {
      cardsEl.forEach((el) => el.removeEventListener("scroll", handleScroll));
    };
  }, [cardsPosition]);

  let currentZIndex = 0;

  const onScroll = (event) => {
    const scroll = window.scrollY;
    console.log(scroll);
  };

  return (
    <div className={styles.stackedCardContainer}>
      {cards.reverse().map((card, index) => {
        // currentTop += 100;
        // currentZIndex += 1;
        // return (
        //   <div
        //     key={index}
        //     style={{
        //       position: "relative",
        //       top: `${currentTop}px`,
        //       zIndex: currentZIndex,
        //     }}
        //     className={styles.stackedCardContainer}
        //   >
        //     <Card {...card} />
        //   </div>
        // );
        currentZIndex += 1;
        return (
          <div
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
            style={{
              gridArea: `${index + 1} / 1 / ${index + 3} / 2`,
              zIndex: currentZIndex,
              transform: `translateY(${20 - 20 * index}%)`,
              transition: `all ${0.5}s ease-in-out ${0.5 + index}s`,
              // justifySelf: "center",
              // alignSelf: "stretch",
              // // width: "100%",
              // textAlign: "center",
              overflowY: "scroll",
            }}
            onScroll={onScroll}
            className={styles.stackedCard3}
          >
            {/* <Card {...card} /> */}
            <img
              src={`${card.backgroundImage}`}
              style={{
                width: "280px",
                height: "auto",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StackedCardContainer;
