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
        paddingRight: "10px", // Spacing inside button
        fontSize: "16px", // Font size
        display: "flex", // Use flexbox to align elements
        alignItems: "center", // Vertically center icon and text
        justifyContent: "space-between", // Space between text and image
        cursor: "pointer", // Pointer on hover
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
        transition: "background 0.3s ease, transform 0.2s ease", // Hover effect
        background: "#456ff6", // Default button color
        ...style, // Inline styles passed from props
      }}
    >
     {imageUrl && (
        <img
          src={imageUrl} // Use the provided image URL
          alt="Button image"
          style={{ width: "48px", height: "48px", marginRight: "10px" }} // Adjust image size and spacing
        />
      )}
      <span
        style={{
          backgroundColor: "#456ff6", // Text highlighting color
          paddingLeft: "10px", // Spacing between icon and text
        }}
      >
        {children}
      </span>
    </button>
  );
}

export default Buttons;
