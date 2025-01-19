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
        color: "#fff", // Text color
        border: "none", // Remove borders
        borderRadius: "4px", // Rounded corners
        padding: "10px 20px", // Spacing inside the button
        fontSize: "16px", // Font size
        display: "flex", // Use flexbox to align elements
        alignItems: "center", // Vertically center icon and text
        justifyContent: "space-between", // Space between text and image
        cursor: "pointer", // Pointer on hover
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
        transition: "background 0.3s ease, transform 0.2s ease", // Hover effect
        ...style, // Inline styles passed from props
      }}
      onClick={onClick}
      onMouseOver={(e) => {
        e.target.style.background = "#1976D2"; // Darken the background on hover
      }}
      onMouseOut={(e) => {
        e.target.style.background = "#2196F3"; // Revert to the original color
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Button image"
          style={{ width: "24px", height: "24px", marginLeft: "10px" }} // Adjust image size and spacing
        />
      )}
    <span>{children}</span>
    </button>
  );
}

export default Buttons;
