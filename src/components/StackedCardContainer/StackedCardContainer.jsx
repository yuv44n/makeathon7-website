import React, { useRef } from "react";
import styles from "./StackedCardContainer.module.css";
import aboutImage from "../../assets/abtM.png";
import sponsorsImage from "../../assets/sponM.png";
import timelineImage from "../../assets/timeM.png";
import tracksImage from "../../assets/tracksM.png";
import newImage from "../../assets/up2M.png";

const StackedCardContainer = ({ scrollToTop }) => {
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
    // New Card
    {
      angle: "0deg",
      xOffset: "0vw",
      backgroundImage: newImage, // Using the new image
      scrollToTop: true, // Trigger scrollToTop behavior
    },
  ];

  let cardsRef = useRef(Array(cards.length).fill(null));
  let cardsPosition = Array(cards.length).fill(-1);

  let currentZIndex = 0;

  const onScroll = (event) => {
    const scroll = window.scrollY;
    console.log(scroll);
  };

  return (
    <div className={styles.stackedCardContainer}>
      {cards.reverse().map((card, index) => {
        currentZIndex += 1;
        return (
          <div
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
            style={{
              gridArea: `${index + 1} / 1 / ${index + 3} / 2`,
              zIndex: currentZIndex,
              transform: `translateY(${20 - 15 * index}%)`,
              transition: `all ${0.5}s ease-in-out ${0.5 + index}s`,
            }}
            onScroll={onScroll}
            className={styles.stackedCard3}
          >
            <img
              src={`${card.backgroundImage}`}
              style={{
                width: "280px",
                height: "auto",
              }}
              onClick={() => {
                if (card.scrollToTop) {
                  scrollToTop();
                } else {
                  window.location.href = card.link;
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StackedCardContainer;
