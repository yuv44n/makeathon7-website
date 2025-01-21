import React from "react";

function Buttons(props) {
  const { children, style, onClick, className, position, icon, imageUrl } = props;

  return (
    <button
      className={className}
      style={{
        position: position?.type || "static",
        top: position?.top,
        left: position?.left,
        right: position?.right,
        bottom: position?.bottom,
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        paddingRight: "10px",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "background 0.3s ease, transform 0.2s ease",
        background: "#456ff6",
        ...style,
      }}
    >
     {imageUrl && (
        <img
          src={imageUrl}
          alt="Button image"
          style={{ width: "48px", height: "48px", marginRight: "10px" }}
        />
      )}
      <span
        style={{
          backgroundColor: "#456ff6",
          paddingLeft: "10px",
        }}
      >
        {children}
      </span>
    </button>
  );
}

export default Buttons;
