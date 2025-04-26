import React, { useState, useEffect } from "react";
import styles from "../styles/MSponsors.module.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sponsorsData = [
  {
    title: "Top Secret",
    logos: [],
  },
  {
    title: "Title Sponsors",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png",
    ],
  },
  {
    title: "Power Sponsors",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png",
    ],
  },
  {
    title: "Associate Sponsors",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png",
    ],
  },
];

export default function MSponsors() {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goRight = () => {
    if (index < sponsorsData.length - 1) {
      setIndex(index + 1);
    }
  };


  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth > 912) {
      navigate("/sponsors");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />

      <div className={styles.fileWrapper}>
        <img
          src="https://res.cloudinary.com/dljpfochn/image/upload/v1745646569/localhost_5173_sponsors_cknkoi.png"
          alt="File"
          className={styles.fileImage}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className={styles.textContent}
          >
            {index === 0 ? (
              <div className={styles.centerText}>TOP SECRET <br/> SPONSORS</div>
            ) : (
              <>
                <h2 className={styles.title}>{sponsorsData[index].title}</h2>
                <div className={styles.logoGrid}>
                  {sponsorsData[index].logos.map((logo, i) => (
                    <img key={i} src={logo} alt="sponsor" className={styles.logo} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.navigation}>
        <button
          onClick={goLeft}
          disabled={index === 0}
          className={styles.navButton}
        >
          <ChevronLeft size={36} color={index === 0 ? "gray" : "white"} />
        </button>

        <button
          onClick={goRight}
          disabled={index === sponsorsData.length - 1}
          className={styles.navButton}
        >
          <ChevronRight
            size={36}
            color={index === sponsorsData.length - 1 ? "gray" : "white"}
          />
        </button>
      </div>
    </div>
  );
}
