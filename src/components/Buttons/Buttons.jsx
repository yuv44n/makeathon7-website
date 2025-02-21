import React from "react";
import styles from "./Buttons.module.css";

export default function Buttons(props) {
  const { children, style, onClick, className, iconType, backgroundColor } =
    props;

  let renderIcon = null;
  if (iconType == "devfolio") {
    renderIcon = devfolioIcon;
  } else if (iconType == "download") {
    renderIcon = downloadIcon;
  }

  return (
    <button
      className={`${styles.button} ${className}`}
      style={{
        backgroundColor: backgroundColor || "#3A3737",
        ...style,
      }}
      onClick={onClick}
    >
      {renderIcon()}
      <span className={styles.text}>{children}</span>
    </button>
  );
}

const devfolioIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60.3 66.2"
      style={{
        width: "24px",
        height: "24px",
        fill: "white",
        marginRight: "10px",
      }}
    >
      <g id="Layer_2_1_">
        <g id="Layer_1-2_1_">
          <path
            className="st0"
            d="M60.3,36.4C60.3,52,48.6,64.7,33.8,66c0,0-19.1,0.5-25.4-0.1c-2.4-0.3-4.4-1.8-5.3-4c0.9,0.4,1.8,0.7,2.8,0.8
                C8,62.9,11.5,63,16.4,63c7.2,0,15.1-0.2,15.1-0.2h0.1c7.9-0.7,15.2-4.3,20.4-10.2c4.5-5,7.4-11.3,8.2-17.9
                C60.3,35.2,60.3,35.8,60.3,36.4z"
          />
          <path
            className="st0"
            d="M58,30c0,15.6-11.7,28.3-26.6,29.5c0,0-19.1,0.5-25.4-0.1c-3.4-0.3-5.9-3.5-6-7.1l0.1-45
                c0.1-3.6,2.7-6.8,6.1-7.1c6.3-0.5,25.4,0.1,25.4,0.1C46.4,1.6,58,14.4,58,30z"
          />
        </g>
      </g>
    </svg>
  );
};

const downloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        width: "24px",
        height: "24px",
        fill: "white",
        marginRight: "10px",
      }}
    >
      <path
        d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
